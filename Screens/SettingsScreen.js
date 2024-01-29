import { View, ScrollView, StyleSheet, Text, Pressable, TextInput } from "react-native";
import ItemComponent from "../components/ItemComponent";
import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";
import { useState } from "react";
import { faCirclePlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button } from "@rneui/base";

const SettingsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => { navigation.navigate('Home') }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={32}></FontAwesomeIcon>
                </Pressable>
            </View>
            <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20, }}>
                <ItemComponent title="Test1" description="Descript test" price={10.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test2" description="Descript test" price={20.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test3" description="Descript test" price={30.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test4" description="Descript test" price={40.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test5" description="Descript test" price={50.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test6" description="Descript test" price={60.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test7" description="Descript test" price={70.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test8" description="Descript test" price={80.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <ItemComponent title="Test9" description="Descript test" price={90.00} isSettings={true} handleShowItemModal={setModalVisible}></ItemComponent>
                <View style={{ height: 64 }}></View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centered}>
                    <View style={styles.modalView}>
                        <Text style={{padding: 5, fontSize: 20}}>Nuevo Item</Text>
                        <TextInput placeholder="Titulo" style={styles.input}></TextInput>
                        <TextInput placeholder="Descripcion" style={styles.input}></TextInput>
                        <TextInput placeholder="Precio" style={styles.input} inputMode="decimal"></TextInput>
                        <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 15}}>
                            <Button title={"Cancelar"} color="#4f4f4f" onPress={() => {setModalVisible(!modalVisible)}}></Button>
                            <Button title={"Guardar"}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
            <StatusBar style="auto" />
            <View style={{ flexDirection: "row", justifyContent: "center", position: "absolute", bottom: 20, right: 20 }}>
                <Pressable onPress={() => { setModalVisible(true) }}>
                    <FontAwesomeIcon icon={faCirclePlus} size={64} style={{ color: "#045ffb", backgroundColor: "#fff", borderRadius: 50 }} />
                </Pressable>
            </View>
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginTop: 50,
        marginRight: 20,
    },
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