import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import { ShowScreenProps } from "./utils/routes";
import { useBlogContext } from "./context/BlogContext";

const ShowScreen = ({navigation, route}: ShowScreenProps) => {
    const {state, addPost, removePost} = useBlogContext();
    const blogPost = state.posts.find((post) => post.id === route.params.id);

    return(
        <View>
            <Text>{blogPost?.title}</Text>
            <Text>{blogPost?.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ShowScreen;