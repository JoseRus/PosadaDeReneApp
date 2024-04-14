import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import { BSON } from 'realm';
import { useRealm, useObject } from '@realm/react';
import { ItemObject } from '../Data/ItemObject';
import { Switch } from '@rneui/base';
import TextComponent from './TextComponent';
import CustomButton from './CustomButtonComponent';

const ModalViewComponent = (props) => {
    let item;

    if (props.id) {
        item = useObject(ItemObject, props.id);
    }

    const [title, setTitle] = useState(item ? item.title : '');
    const [description, setDescription] = useState(item ? item.description : '');
    const [price, setPrice] = useState(item ? item.price.toString() : '');
    const [multiple, setMultiple] = useState(item ? item.multiple : false);
    const realm = useRealm();

    const toggleSwitch = () => { setMultiple(!multiple) }

    const handleSavePress = () => {
        realm.write(() => {
            realm.create(ItemObject, {
                _id: props.id ? props.id : new BSON.ObjectID(),
                title: title,
                description: description,
                price: parseFloat(price),
                multiple: multiple
            }, 'modified');
        });

        props.setModalVisible(false);
    }

    return (
        <View style={styles.centered}>
            <View style={styles.modalView}>
                <TextComponent style={styles.title}>Nuevo Item</TextComponent>
                <TextInput placeholder="Titulo" placeholderTextColor={'#a89c52'} style={styles.input} value={title} onChangeText={setTitle}></TextInput>
                <TextInput placeholder="Descripcion" placeholderTextColor={'#a89c52'} style={styles.input} value={description} onChangeText={setDescription}></TextInput>
                <TextInput placeholder="Precio" placeholderTextColor={'#a89c52'} style={styles.input} inputMode="decimal" value={price} onChangeText={setPrice}></TextInput>
                <View style={{flexDirection: 'row', margin: 5}}>
                    <TextComponent style={[styles.text, {flexGrow: 1}]}>Multiples</TextComponent>
                    <Switch value={multiple} onValueChange={toggleSwitch} style={{flexGrow: 0, marginTop: '1', marginBottom: '1'}} color='#ffd700'></Switch>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                    <CustomButton title={"Cancelar"} onPress={() => { props.setModalVisible(false) }} backgroundColor='#a6a185'></CustomButton>
                    <CustomButton title={"Guardar"} onPress={handleSavePress} backgroundColor='#ffd700'></CustomButton>
                </View>
            </View>
        </View>
    )
}

export default ModalViewComponent;

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: '#0a0a0a',
        borderRadius: 20,
        borderColor: '#ffd700',
        borderWidth: 2,
        padding: 15,
    },
    input: {
        borderStyle: "solid",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffd700',
        padding: 5,
        margin: 5,
        fontFamily: 'UpperEastSide',
        fontSize: 30,
    },
    title: {
        padding: 5,
        fontSize: 40,
        textAlign: 'center'
    },
    text: {
        fontSize: 30
    }
});