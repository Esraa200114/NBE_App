import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconGenerator from '../atoms/IconGenerator'
import { Colors } from '../../../constants/Colors'

type passwordCriteriaIndicator = {
    text: string,
    iconName: "filled-circle" | "empty-circle"
}

const PasswordCriteriaIndicator = ({text, iconName}: passwordCriteriaIndicator) => {
    return (
        <View style={styles.passwordIndicatorCriteriaContainer}>
            <IconGenerator type={iconName} />
            <Text style={styles.passwordIndicatorCriteriaText}>{text}</Text>
        </View>
    )
}

export default PasswordCriteriaIndicator

const styles = StyleSheet.create({
    passwordIndicatorCriteriaContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4
    },
    passwordIndicatorCriteriaText: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.DeepInk,
        marginLeft: 10
    }
})