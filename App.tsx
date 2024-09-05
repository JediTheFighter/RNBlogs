import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/IndexScreen';
import {BlogProvider} from './src/context/BlogContext';
import ShowScreen from './src/ShowScreen';
import {RootStackParamList} from './src/utils/routes';
import {Button, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CreateScreen from './src/CreateScreen';
import EditScreen from './src/EditScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{title: 'Blogs'}}>
          <Stack.Screen name="Index" component={IndexScreen} options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {  
                    navigation.navigate('Create');
                  }}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}/>
          <Stack.Screen
            name="Show"
            component={ShowScreen} options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Edit', route.params);
                  }}>
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
