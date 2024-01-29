import React, { useState } from "react";
import { Card } from "@rneui/base";
import { View, Text, StyleSheet, Pressable, Alert, Modal } from "react-native";
import CheckBox from 'expo-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
    card: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },
    popup: {
        position: 'absolute',
        top: 35,
        right: 0,
        backgroundColor: '#fff',
        padding: 5,
        flexDirection: 'row',
        borderColor: '000',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        zIndex: 1
    }
});

const ItemComponent = (props) => {

    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexGrow: 2 }}>
                    <Card.Title>{props.title}</Card.Title>
                </View>
                <View style={{ flexGrow: 0 }}>
                    <CheckMenuButton isSettings={props.isSettings} handleCheckChange={props.handleCheckChange} handleShowItemModal={props.handleShowItemModal} price={props.price}></CheckMenuButton>
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

function CheckMenuButton(props) {
    const [isChecked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    if (props.isSettings) {
        return (
            <View>
                <Pressable onPress={() => { setModalVisible(!modalVisible) }}>
                    <FontAwesomeIcon icon={faEllipsisVertical} size={28} />
                </Pressable>
                <ItemSettingsMenu modalVisible={modalVisible} setModalVisible={setModalVisible} handleShowItemModal={props.handleShowItemModal} ></ItemSettingsMenu>
            </View>
        );
    }

    return <CheckBox value={isChecked} onValueChange={() => { setChecked(!isChecked); props.handleCheckChange(!isChecked ? props.price : props.price * (-1)) }} style={{width:32, height: 32}}></CheckBox>
}

function ItemSettingsMenu({ modalVisible, setModalVisible, handleShowItemModal }) {

    if (modalVisible) {
        return (
            <View style={styles.popup}>
                <Pressable style={{ paddingEnd: 15 }} onPress={() => {handleShowItemModal(true); setModalVisible(false)}}>
                    <FontAwesomeIcon icon={faPenToSquare} size={28}></FontAwesomeIcon>
                </Pressable>
                <Pressable>
                    <FontAwesomeIcon icon={faTrash} size={28}></FontAwesomeIcon>
                </Pressable>
            </View>
        );
    }

    return
}