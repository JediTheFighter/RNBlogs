import React from 'react';
import {StyleSheet} from 'react-native';
import {useBlogContext} from './context/BlogContext';
import {CreateScreenProps} from './utils/routes';
import BlogPostForm from './components/BlogPostForm';

const CreateScreen = ({navigation, route}: CreateScreenProps) => {
  const {state, addPost, removePost} = useBlogContext();

  return (
    <BlogPostForm initialValue={{title: undefined, content: undefined}} onSubmit={(title, content) => {
        addPost({id: Math.floor(Math.random() * 9999),title: title, content: content}, () => {
            navigation.navigate('Index');
        })
    }}/>
  );
};

const styles = StyleSheet.create({
  
});

export default CreateScreen;
