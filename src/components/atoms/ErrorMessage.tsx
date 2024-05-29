import React from 'react'
import { StyleSheet, Text } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

type ErrorMessageProps = {
    message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <Text style={styles.errors}>{message}</Text>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    errors: {
        fontFamily: "Roboto Bold",
        color: Colors.light.VividRed,
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 4,
    },
})