import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Colors
import { Colors } from '../../../constants/Colors';

const LoginFooter = () => {

    let dashStyle = [styles.regularFont, styles.smallFont, styles.smallTextStyle, styles.whiteText]
    return (
        <View>
            <LinearGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.4)"]} style={styles.footerContent}>
                <Text style={[styles.boldFont, styles.smallFont, styles.smallTextStyle, styles.orangeText, styles.centeredText]}>Contact Us <Text style={dashStyle}> - </Text> FAQs <Text style={dashStyle}> - </Text> Help</Text>
                <Text style={[styles.regularFont, styles.extraSmallFont, styles.extraSmallTextStyle, styles.whiteText, styles.centeredText, { paddingVertical: 5, }]}>Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContent: {
        paddingVertical: 16,
    },
    boldFont: {
        fontFamily: "Roboto Bold",
    },
    smallFont: {
        fontSize: 12,
    },
    smallTextStyle: {
        lineHeight: 14.06,
    },
    orangeText: {
        color: Colors.SunsetOrange,
    },
    regularFont: {
        fontFamily: "Roboto Regular",
    },
    whiteText: {
        color: Colors.PureWhite,
    },
    extraSmallFont: {
        fontSize: 10,
    },
    extraSmallTextStyle: {
        lineHeight: 11.72,
    },
    centeredText: {
        textAlign: "center"
    }
});

export default LoginFooter;
