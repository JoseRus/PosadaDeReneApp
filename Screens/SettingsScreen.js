import { View, ScrollView, StyleSheet, Text } from "react-native";
import ItemComponent from "../components/ItemComponent";
import { StatusBar } from "expo-status-bar";

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
                <ItemComponent title="Test1" description="Descript test" price={10.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test2" description="Descript test" price={20.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test3" description="Descript test" price={30.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test4" description="Descript test" price={40.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test5" description="Descript test" price={50.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test6" description="Descript test" price={60.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test7" description="Descript test" price={70.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test8" description="Descript test" price={80.00} isSettings={true}></ItemComponent>
                <ItemComponent title="Test9" description="Descript test" price={90.00} isSettings={true}></ItemComponent>
            </ScrollView>
            <StatusBar style="auto" />
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
      }
});