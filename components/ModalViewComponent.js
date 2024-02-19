import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { BSON } from 'realm';
import { useRealm } from '@realm/react';
import { ItemObject } from '../Data/ItemObject';

const ModalViewComponent = (props) => {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const realm = useRealm();

    const handleSavePress = () => {
        realm.write(() => {
            realm.create(ItemObject, {
                _id: new BSON.ObjectID(),
                title: title,
                description: description,
                price: price
            });
        });
    }

    return (
        <View style={styles.centered}>
            <View style={styles.modalView}>
                <Text style={{ padding: 5, fontSize: 20 }}>Nuevo Item</Text>
                <TextInput placeholder="Titulo" style={styles.input} value={title} onChangeText={setTitle}></TextInput>
                <TextInput placeholder="Descripcion" style={styles.input} value={description} onChangeText={setDescription}></TextInput>
                <TextInput placeholder="Precio" style={styles.input} inputMode="decimal" value={price} onChangeText={setPrice}></TextInput>
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