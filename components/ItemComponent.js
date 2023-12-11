import * as React from "react";
import { Card } from "@rneui/base";
import { View, Text, StyleSheet } from "react-native";

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

const ItemComponent = (props) => (
    <View style={styles.card}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Divider/>
        <View style={{alignItems:"left"}}>
          <Text >{props.description}</Text>
          <Text style={{textAlign:"right"}}>{props.price}</Text>
         </View>
    </View>
);

export default ItemComponent;