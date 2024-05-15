import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '../../../constants/Colors';

const LoginFooter = () => {
    return (
        <View>
            <LinearGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.4)"]} style={styles.footerContent}>
                <Text style={styles.upperFooterText}>Contact Us <Text style={styles.dash}> - </Text> FAQs <Text style={styles.dash}> - </Text> Help</Text>
                <Text style={styles.lowerFooterText}>Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContent: {
        paddingVertical: 16, 
    },
    upperFooterText: {
        fontFamily: "Roboto Bold",
        fontSize: 12,
        lineHeight: 14.06,
        textAlign: "center",
        color: Colors.SunsetOrange,
    },
    dash: {
        fontFamily: "Roboto Regular",
        fontSize: 12,
        lineHeight: 14.06,
        textAlign: "center",
        color: Colors.PureWhite,
    },
    lowerFooterText: {
        fontFamily: "Roboto Regular",
        fontSize: 10,
        lineHeight: 11.72,
        textAlign: "center",
        color: Colors.PureWhite,
        paddingVertical: 5,
    },
});

export default LoginFooter;
