import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import IconGenerator from '../atoms/IconGenerator'
import { Colors } from '../../../constants/Colors'
import { ThemeContext } from '../../context/ThemeContext'

type passwordCriteriaIndicator = {
    text: string,
    iconName: "filled-circle" | "empty-circle"
}

const PasswordCriteriaIndicator = ({ text, iconName }: passwordCriteriaIndicator) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={styles.passwordIndicatorCriteriaContainer}>
            <IconGenerator type={iconName} />
            <Text style={[styles.passwordIndicatorCriteriaText, {
                color: activeColors.DeepInk,
            }]}>{text}</Text>
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
        marginLeft: 10
    }
})