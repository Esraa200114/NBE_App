// SendMoneyContactItem.js

import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants/Colors';

type SendMoneyContactItemProp = {
    name: string,
    image: any
};

const SendMoneyContactItem = ({ name, image }: SendMoneyContactItemProp) => {
    return (
        <View style={{padding: 10}}>
            <View style={styles.sendMoneyContactItemContainer}>
                <View>
                    <Image source={image} style={styles.contactImage} />
                </View>
                <Text style={styles.contactName}>{name}</Text>
            </View>
        </View>

    );
};

export default SendMoneyContactItem;

const styles = StyleSheet.create({
    sendMoneyContactItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.WhiteSmoke,
        width: 77,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 35,
        elevation: 10,
        height: 86,
        borderRadius: 18
    },
    contactImage: {
        width: 33.35,
        height: 33.35,
        borderRadius: 8,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 36,
        elevation: 10,
    },
    contactName: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        textAlign: 'center',
        color: Colors.DeepInk,
        marginTop: 10
    }
});