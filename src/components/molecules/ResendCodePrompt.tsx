import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Components
import LoginActionsContainer from './LoginActionsContainer'

type ResendCodePromptProps = {
    activeColors: any,
    isTimerOver: boolean,
    seconds: number,
    resendCodeHandler: () => void
}

const ResendCodePrompt = ({ activeColors, isTimerOver, seconds, resendCodeHandler }: ResendCodePromptProps) => {

    return (
        <View>
            <Text style={[styles.regularFont, styles.regularFontSize, styles.regularTextSyle, styles.noCodeReceievedText, { color: activeColors.SlateGrey }]}>Didn’t receive the code?</Text>
            {!isTimerOver && (
                <LoginActionsContainer>
                    <Text style={[styles.boldFont, styles.regularFontSize, styles.regularTextSyle, {
                        color: activeColors.DeepInk,
                    }]}>Request new one in 00:{seconds.toString().padStart(2, '0')}</Text>
                </LoginActionsContainer>
            )}
            {isTimerOver && (
                <TouchableOpacity onPress={resendCodeHandler}>
                    <Text style={[styles.boldFont, styles.regularFontSize, styles.regularTextSyle, styles.resendCodeText, { color: activeColors.ForestGreen, textDecorationColor: activeColors.ForestGreen }]}>Resend code</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default ResendCodePrompt

const styles = StyleSheet.create({
    regularFont: {
        fontFamily: "Roboto Regular",
    },
    regularFontSize: {
        fontSize: 16,
    },
    regularTextSyle: {
        lineHeight: 18.75,
    },
    noCodeReceievedText: {
        marginBottom: 4,
    },
    boldFont: {
        fontFamily: "Roboto Bold",
    },
    resendCodeText: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    },
})