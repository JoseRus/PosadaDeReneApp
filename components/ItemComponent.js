import React, { useState } from "react";
import { Card } from "@rneui/base";
import { View, Text, StyleSheet, Pressable, Alert, Modal, TextInput } from "react-native";
import CheckBox from 'expo-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRealm, useObject } from "@realm/react"; import { ItemObject } from "../Data/ItemObject";


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
    const [isChecked, setChecked] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState();

    const updateQuantity = (quant) => {
        let tp = quant > 0 ? props.price * quant : props.price
        let currentItemTotal = quantity * props.price;
        let currentTotal = props.total - currentItemTotal;
        setQuantity(quant);
        setTotalPrice(tp);

        if (isChecked && quant > 0) {
            props.setTotal(currentTotal + tp);
        }
        else if(isChecked){
            props.setTotal(currentTotal);
        }
    }

    const handleCheckChange = (price) => {
        props.setTotal(props.total + price);
    }

    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexGrow: 2 }}>
                    <Card.Title>{props.title}</Card.Title>
                </View>
                <View style={{ flexGrow: 0 }}>
                    <CheckMenuButton
                        isSettings={props.isSettings}
                        handleCheckChange={handleCheckChange}
                        handleShowItemModal={props.handleShowItemModal}
                        price={props.price} id={props.id}
                        quantity={quantity}
                        totalPrice={totalPrice}
                        isChecked={isChecked}
                        setChecked={setChecked}>
                    </CheckMenuButton>
                </View>
            </View>

            <Card.Divider />
            <View style={{ alignItems: "left" }}>
                <Text >{props.description}</Text>
                <Text style={{ textAlign: "right" }}>${props.price}</Text>
                {props.multiple ? <TextInput value={quantity.toString()} onChangeText={updateQuantity} inputMode="decimal"></TextInput> : ''}
            </View>
        </View>
    );
};

export default ItemComponent;

function CheckMenuButton(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const totalPrice = props.quantity > 0 ? props.price * props.quantity : props.price

    if (props.isSettings) {
        return (
            <View>
                <Pressable onPress={() => { setModalVisible(!modalVisible) }}>
                    <FontAwesomeIcon icon={faEllipsisVertical} size={28} />
                </Pressable>
                <ItemSettingsMenu
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    handleShowItemModal={props.handleShowItemModal}
                    id={props.id} >

                </ItemSettingsMenu>
            </View>
        );
    }

    return <CheckBox
        value={props.isChecked}
        onValueChange={() => {
            props.setChecked(!props.isChecked);
            props.handleCheckChange(!props.isChecked ? totalPrice : totalPrice * (-1))
        }}
        style={{ width: 32, height: 32 }}>

    </CheckBox>
}

function ItemSettingsMenu({ modalVisible, setModalVisible, handleShowItemModal, id }) {
    const realm = useRealm();
    const item = useObject(ItemObject, id);

    const onDeletePress = () => {
        realm.write(() => {
            realm.delete(item);
        })
    }

    if (modalVisible) {
        return (
            <View style={styles.popup}>
                <Pressable style={{ paddingEnd: 15 }} onPress={() => { handleShowItemModal(true, id); setModalVisible(false) }}>
                    <FontAwesomeIcon icon={faPenToSquare} size={28}></FontAwesomeIcon>
                </Pressable>
                <Pressable onPress={onDeletePress}>
                    <FontAwesomeIcon icon={faTrash} size={28}></FontAwesomeIcon>
                </Pressable>
            </View>
        );
    }

    return
}