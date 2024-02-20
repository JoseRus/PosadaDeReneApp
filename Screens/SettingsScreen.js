import { View, ScrollView, StyleSheet, Text, Pressable, TextInput } from "react-native";
import ItemComponent from "../components/ItemComponent";
import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";
import { useState } from "react";
import { faCirclePlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ModalViewComponent from "../components/ModalViewComponent";
import { useQuery } from "@realm/react";
import { ItemObject } from "../Data/ItemObject";


const SettingsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentId, setId] = useState();
    const items = useQuery(ItemObject);

    const handleShowItemModal = (show, id) => {
        setId(id);
        setModalVisible(show);
    }

    if(items && items.length > 0){
        return (
            <View style={styles.container}>
                <View>
                    <Pressable onPress={() => { navigation.navigate('Home') }}>
                        <FontAwesomeIcon icon={faArrowLeft} size={32}></FontAwesomeIcon>
                    </Pressable>
                </View>
                <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20, }}>
                    {
                        items.map((item) => {
                            return(
                                <ItemComponent key={item._id} id={item._id} title={item.title} description={item.description} price={item.price} isSettings={true} handleShowItemModal={handleShowItemModal}></ItemComponent>
                            )
                        })
                    }
                    <View style={{ height: 64 }}></View>
                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <ModalViewComponent setModalVisible={setModalVisible} id={currentId}></ModalViewComponent>
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
    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => { navigation.navigate('Home') }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={32}></FontAwesomeIcon>
                </Pressable>
            </View>
            <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20, }}>
                <View style={{ height: 64 }}></View>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <ModalViewComponent setModalVisible={setModalVisible}></ModalViewComponent>
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
});