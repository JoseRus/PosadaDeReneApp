import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as StorageFunctions from '../Data/StorageFunctions';

const ModalViewComponent = (props) => {
    return (
        <View style={styles.centered}>
            <View style={styles.modalView}>
                <Text style={{ padding: 5, fontSize: 20 }}>Nuevo Item</Text>
                <TextInput placeholder="Titulo" style={styles.input}></TextInput>
                <TextInput placeholder="Descripcion" style={styles.input}></TextInput>
                <TextInput placeholder="Precio" style={styles.input} inputMode="decimal"></TextInput>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                    <Button title={"Cancelar"} color="#4f4f4f" onPress={() => { props.setModalVisible(false) }}></Button>
                    <Button title={"Guardar"} onPress={() => { StorageFunctions.save('items', '{}') }}></Button>
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