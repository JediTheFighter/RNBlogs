import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useBlogContext} from './context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';
import {IndexScreenProps} from './utils/routes';

const IndexScreen = ({navigation, route}: IndexScreenProps) => {
  const {state, addPost, removePost} = useBlogContext();

  return (
    <View>
      <Text>Index Screen</Text>
      <Button
        title="Add Blog"
        onPress={() => {
          addPost({
            id: Math.floor(Math.random() * 9999),
            title: 'asdg',
            content: 'asdf',
          }, () => {});
        }}
      />
      <FlatList
        data={state.posts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Show', item);
              }}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    removePost(item.id);
                  }}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// IndexScreen.navigationOptions = ({navigation, route}: IndexScreenProps) => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Create');
//         }}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 18,
  },
});

export default IndexScreen;
