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
        padding: 5,
        marginBottom: 10
    }
});

const TotalComponent = (props) => {
    return (
        <View style={styles.total_container}>
            <Text style={styles.total_text}>Total</Text>
            <Text style={styles.total_text}>${calculateTotal(props.total, props.discount)}</Text>
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