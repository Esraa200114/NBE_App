import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import { OtpInput } from 'react-native-otp-entry'

type PinCodeInputProps = {
    onTextChange: (text: string) => void
}

const PinCodeInput = ({ onTextChange }: PinCodeInputProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <OtpInput
            numberOfDigits={6}
            focusColor={activeColors.ForestGreen}
            focusStickBlinkingDuration={500}
            onTextChange={onTextChange}
            theme={{
                pinCodeContainerStyle: {
                    backgroundColor: activeColors.PureWhite,
                    borderColor: activeColors.PureWhite,
                    shadowColor: activeColors.CharcoalGray,
                    ...styles.pinCodeContainer
                },
                pinCodeTextStyle: {
                    color: activeColors.DeepInk,
                    ...styles.pinCodeText
                },
                focusedPinCodeContainerStyle: { borderColor: activeColors.ForestGreen },
            }}
        />
    )
}

export default PinCodeInput

const styles = StyleSheet.create({
    pinCodeContainer: {
        width: 45,
        height: 65,
        borderRadius: 10,
        borderWidth: 1.5,
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 1,
    },
    pinCodeText: {
        fontFamily: "Roboto Bold",
        fontSize: 25,
        lineHeight: 29.3,
    },
})