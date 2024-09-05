import React from "react";
import {StyleSheet} from 'react-native';
import { useBlogContext } from "./context/BlogContext";
import { EditScreenProps } from "./utils/routes";
import BlogPostForm from "./components/BlogPostForm";

const EditScreen = ({navigation, route}: EditScreenProps) => {
    const {state, addPost, removePost, editPost} = useBlogContext();
    const blogPost = state.posts.find((post) => post.id === route.params.id);


    return(
        <BlogPostForm initialValue={{title: blogPost?.title ?? '', content: blogPost?.content ?? ''}} onSubmit={(title, content) => {
            editPost(blogPost?.id ?? 0, title, content, () => {
                navigation.pop();
            })
        }}/>
    );
}

const styles = StyleSheet.create({});

export default EditScreen;