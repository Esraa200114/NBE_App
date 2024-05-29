import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

const ForgotPasswordText = () => {
    return (
        <TouchableOpacity>
            <Text style={[styles.regularFont, styles.mediumFont, styles.mediumTextStyles, styles.mistGreyText]}>Forgot password?</Text>
        </TouchableOpacity>
    )
}

export default ForgotPasswordText

const styles = StyleSheet.create({
    regularFont: {
        fontFamily: "Roboto Regular",
    },
    mediumFont: {
        fontSize: 14,
    },
    mediumTextStyles: {
        lineHeight: 16.41,
    },
    mistGreyText: {
        color: Colors.light.MistGrey,
    },
})