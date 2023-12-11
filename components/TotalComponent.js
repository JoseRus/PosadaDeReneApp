import * as React from "react";
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    total_text: {
        fontSize: 50.
    },
    total_container: {
        flexDirection: "row",
        backgroundColor: "#969696",
        justifyContent: "space-between",
        borderRadius: 5,
        padding: 5
    }
});

const TotalComponent = (props) => {
    return(
        <View style={styles.total_container}>
            <Text style={styles.total_text}>Total</Text>
            <Text style={styles.total_text}>{props.total}</Text>
        </View>
    )
};

export default TotalComponent;