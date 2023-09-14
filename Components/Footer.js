import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
                <Text style={styles.buttonText}>All Rights are Reserved to HelloUser © 2018.
                </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        marginTop:20,
    },
   
    buttonText: {
        fontSize: 20,
        margin:10,
    },
});

export default Footer;
