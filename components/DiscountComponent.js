import { Switch } from '@rneui/base';
import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Stylesheet } from 'react-native';

const DiscountComponent = ({ handleDiscountEnableChange }) => {
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [discount, setDiscount] = useState();

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
                placeholder='Descuento'
                onChangeText={(value) => {
                    setDiscount(value);
                    
                    if(switchEnabled){
                        handleDiscountEnableChange(value);
                    }
                }}
            >
            </TextInput>
            <Switch
                value={switchEnabled}
                onValueChange={() => { setSwitchEnabled(!switchEnabled); handleDiscountEnableChange(!switchEnabled ? discount : 0) }}
            >
            </Switch>
        </View>
    );
}

export default DiscountComponent;