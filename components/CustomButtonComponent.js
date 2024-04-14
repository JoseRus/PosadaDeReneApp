import { TouchableOpacity, StyleSheet, View } from "react-native";
import TextComponent from "./TextComponent";

const CustomButton = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} style={[styles.background, {backgroundColor: props.backgroundColor}]}>
                <TextComponent style={[styles.text, {backgroundColor: props.backgroundColor}]}>{props.title}</TextComponent>
            </TouchableOpacity>
        </View>
    )

}

export default CustomButton;

const styles = StyleSheet.create({
    background: {
        paddingBottom: 5,
        paddingTop: 5, 
        paddingStart: 10,
        paddingEnd: 15,
        borderRadius: 5
    },
    text: {
        color: '#0a0a0a',
        fontSize: 30
    }
})