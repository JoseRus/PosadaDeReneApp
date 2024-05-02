import React, { useState } from "react";
import { Card } from "@rneui/base";
import { View, StyleSheet, Pressable, TextInput } from "react-native";
import CheckBox from 'expo-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRealm, useObject } from "@realm/react"; import { ItemObject } from "../Data/ItemObject";
import TextComponent from "./TextComponent";

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
        else if (isChecked) {
            props.setTotal(currentTotal);
        }
    }

    const handleCheckChange = (price) => {
        props.setTotal(props.total + price);
    }

    return (
        
            <Card containerStyle={styles.card}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <View style={{ flexShrink: 10, flexGrow: 1 }}>
                        <TextComponent style={styles.title}>{props.title}</TextComponent>
                    </View>
                    <View style={{flexShrink: 1, flexGrow: 0 }}>
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

                <Card.Divider color={'#ffd700'} />
                <View style={{ alignItems: "left" }}>
                    <TextComponent style={styles.text}>{props.description}</TextComponent>
                    <TextComponent style={[{ textAlign: "right" }, styles.text]}>${props.price}</TextComponent>
                    {props.multiple ? <TextInput value={quantity.toString()} onChangeText={updateQuantity} inputMode="decimal" style={{ fontFamily: 'UpperEastSide', fontSize: 25 }}></TextInput> : ''}
                </View>
            </Card>
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
                    <FontAwesomeIcon icon={faEllipsisVertical} size={28}  style={{color: '#daa520'}}/>
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
        style={{ width: 32, height: 32, borderColor: '#daa520' }}
        color={'#daa520'}>

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
                    <FontAwesomeIcon icon={faPenToSquare} size={28} style={{color: '#0a0a0a'}}></FontAwesomeIcon>
                </Pressable>
                <Pressable onPress={onDeletePress}>
                    <FontAwesomeIcon icon={faTrash} size={28} style={{color: '#0a0a0a'}}></FontAwesomeIcon>
                </Pressable>
            </View>
        );
    }

    return
}

const styles = StyleSheet.create({
    card: {
        borderStyle: "solid",
        borderColor: '#daa520',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: '#0a0a0a'
    },
    popup: {
        position: 'absolute',
        top: 35,
        right: 0,
        backgroundColor: '#daa520',
        padding: 5,
        flexDirection: 'row',
        borderColor: '000',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#877a31',
        zIndex: 1
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 30
    }
});