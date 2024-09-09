import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import showAlert from './AlertDialog';

interface BlogPostFormArgs {
    onSubmit: (title: string, content: string) => void;
    initialValue: InitialValue;
}

type InitialValue = {
    title?: string;
    content?: string;
}

const BlogPostForm = (args: BlogPostFormArgs) => {

  const [title, setTitle] = useState(args.initialValue.title);
  const [content, setContent] = useState(args.initialValue.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button
        title="Save Blog Post"
        onPress={() => {
          if (title?.length === 0) {
            showAlert({title: 'Missing Fields', message: 'Please enter title'});
            return;
          }
          if (content?.length === 0) {
            showAlert({
              title: 'Missing Fields',
              message: 'Please enter content',
            });
            return;
          }
          args.onSubmit(title ?? '', content ?? '');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default BlogPostForm;
