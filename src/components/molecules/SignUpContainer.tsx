import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import LoginActionsContainer from './LoginActionsContainer'

type SignUpContainerProps = {
    onPress: () => void
}

const SignUpContainer = ({ onPress }: SignUpContainerProps) => {
    return (
        <LoginActionsContainer style={styles.centeredContent}>
            <Text style={[styles.regularFont, styles.mediumFont, styles.mediumTextStyles, styles.whiteText]}>Don’t have an account? </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.boldFont, styles.mediumFont, styles.mediumTextStyles, styles.amberGoldDecoratedText]}>Sign up</Text>
            </TouchableOpacity>
        </LoginActionsContainer >
    )
}

export default SignUpContainer

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
    whiteText: {
        color: Colors.light.PureWhite,
    },
    boldFont: {
        fontFamily: "Roboto Bold",
    },
    amberGoldDecoratedText: {
        color: Colors.light.AmberGold,
        textDecorationLine: "underline",
        textDecorationColor: Colors.light.AmberGold,
        textDecorationStyle: "solid"
    },
    centeredContent: {
        justifyContent: "center",
    },
})