import * as React from "react";
import { View, Text, StyleSheet } from 'react-native';
import TextComponent from "./TextComponent";

const styles = StyleSheet.create({
    total_text: {
        fontSize: 50,
        fontFamily: 'UpperEastSide',
    },
    total_container: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 215, 0, 0.36)",
        justifyContent: "space-between",
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    }
});

const TotalComponent = (props) => {
    return (
        <View style={styles.total_container}>
            <TextComponent style={styles.total_text}>Total</TextComponent>
            <TextComponent style={styles.total_text}>${calculateTotal(props.total, props.discount)}</TextComponent>
        </View>
    )
};

export default TotalComponent;

function calculateTotal(total, discount) {

    if (total > 0) {
        if (discount && discount.length > 0 && discount.indexOf('%') >= 0) {
            return total - (total * (parseFloat(discount) / 100));
        }
        else if (discount > 0) {
            return total - discount
        }
    }

    return total;
}