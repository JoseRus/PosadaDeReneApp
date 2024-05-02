import { Switch } from '@rneui/base';
import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const DiscountComponent = ({ handleDiscountEnableChange }) => {
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [discount, setDiscount] = useState();

    return (
        <View style={styles.discountView}>
            <TextInput
                placeholder='Descuento'
                placeholderTextColor={'#a89c52'}
                onChangeText={(value) => {
                    setDiscount(value);
                    
                    if(switchEnabled){
                        handleDiscountEnableChange(value);
                    }
                }}
                style={styles.textInput}
            >
            </TextInput>
            <Switch
                value={switchEnabled}
                onValueChange={() => { setSwitchEnabled(!switchEnabled); handleDiscountEnableChange(!switchEnabled ? discount : 0) }}
                color='#daa520'
            >
            </Switch>
        </View>
    );
}

export default DiscountComponent;

const styles = StyleSheet.create({
    textInput: {
        fontFamily: 'UpperEastSide',
        fontSize: 30,
        color: '#daa520'
    },
    discountView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderColor: '#daa520', 
        borderWidth: 1, 
        padding: 5, 
        borderRadius: 10,
        backgroundColor: '#0a0a0a'
    }
})