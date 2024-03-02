import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import { BSON } from 'realm';
import { useRealm, useObject } from '@realm/react';
import { ItemObject } from '../Data/ItemObject';
import { Switch } from '@rneui/base';

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
                <Text style={{ padding: 5, fontSize: 20 }}>Nuevo Item</Text>
                <TextInput placeholder="Titulo" style={styles.input} value={title} onChangeText={setTitle}></TextInput>
                <TextInput placeholder="Descripcion" style={styles.input} value={description} onChangeText={setDescription}></TextInput>
                <TextInput placeholder="Precio" style={styles.input} inputMode="decimal" value={price} onChangeText={setPrice}></TextInput>
                <View>
                    <Text>Multiples</Text>
                    <Switch value={multiple} onValueChange={toggleSwitch}></Switch>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                    <Button title={"Cancelar"} color="#4f4f4f" onPress={() => { props.setModalVisible(false) }}></Button>
                    <Button title={"Guardar"} onPress={handleSavePress}></Button>
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
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        borderStyle: "solid",
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
        margin: 5
    }
});