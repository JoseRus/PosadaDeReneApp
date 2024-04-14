import React from "react";
import { Text, StyleSheet } from "react-native";

const TextComponent = (props) => {
    return(
        <Text style={[styles.default, props.style]}>{props.children}</Text>
    );
}

export default TextComponent;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'UpperEastSide',
        color: '#ffd700'
    }
});