import React from "react";
import { StyleSheet, View } from "react-native";

interface SizedBoxProp {
    height?: number;
    width?: number;
}

const SizedBox = (prop: SizedBoxProp) => {
    return (
    <View style={[styles.container, {height: prop.height, width: prop.width}]}>

    </View>);
}

const styles = StyleSheet.create({
    container: {
        
    }
});

export default SizedBox;