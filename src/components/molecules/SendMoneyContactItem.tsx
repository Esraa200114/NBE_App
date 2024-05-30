import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Colors
import { Colors } from '../../../constants/Colors';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

type SendMoneyContactItemProp = {
    name: string,
    image: any
};

const SendMoneyContactItem = ({ name, image }: SendMoneyContactItemProp) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={{ padding: 10 }}>
            <View style={[styles.sendMoneyContactItemContainer, {
                backgroundColor: activeColors.WhiteSmoke, shadowColor: activeColors.MidnightBlack,
            }]}>
                <View>
                    <Image source={image} style={[styles.contactImage, {
                        shadowColor: activeColors.MidnightBlack,
                    }]} />
                </View>
                <Text style={[styles.contactName, {
                    color: activeColors.DeepInk,
                }]}>{name}</Text>
            </View>
        </View >

    );
};

export default SendMoneyContactItem;

const styles = StyleSheet.create({
    sendMoneyContactItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 77,
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
        marginTop: 10
    }
});