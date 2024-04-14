import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    },
    logo: {
        width: 75,
        height: 75
    }
})

const LogoComponent = () => (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../assets/logo.png')}>
        </Image>
    </View>
);

export default LogoComponent;