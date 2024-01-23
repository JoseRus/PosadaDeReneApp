import React, { useState } from "react";
import { Card } from "@rneui/base";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from 'expo-checkbox';

const styles = StyleSheet.create({
    card: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    }
});

const ItemComponent = (props) => {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexGrow: 2 }}>
                    <Card.Title>{props.title}</Card.Title>
                </View>
                <View style={{ flexGrow: 0 }}>
                    <CheckBox value={isChecked} onValueChange={() => {setChecked(!isChecked); props.handleCheckChange(!isChecked ? props.price : props.price * (-1))}}></CheckBox>
                </View>
            </View>

            <Card.Divider />
            <View style={{ alignItems: "left" }}>
                <Text >{props.description}</Text>
                <Text style={{ textAlign: "right" }} id='itemPrice'>${props.price}</Text>
            </View>
        </View>
    );
};

export default ItemComponent;