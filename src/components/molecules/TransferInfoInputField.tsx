import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants/Colors'

type TransferInfoInputFieldProps = {
    label: string | null,
    enteredValue: string,
    onValueChange: (value: string) => void,
    focused: boolean,
    onFocus: () => void,
    onBlur: () => void
}

const TransferInfoInputField = ({ label, enteredValue, onValueChange, focused, onFocus, onBlur }: TransferInfoInputFieldProps) => {

    // const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={[styles.transferInfoInputFieldContainer, { borderColor: focused ? Colors.ForestGreen : Colors.PureWhite }]}
        >
            {label && <Text style={[styles.transferInfoInputFieldLabel, { color: focused ? Colors.ForestGreen : Colors.DeepInk }]}>
                {label}
            </Text>}
            <TextInput
                placeholderTextColor={Colors.SlateGrey}
                placeholder={label ? 'e.g. $6,580.00' : "Reason of transfer"}
                style={[label ? styles.transferInfoInputFieldValue : styles.transferInfoInputFieldLabel, { paddingVertical: label ? 0 : 10, color: Colors.DeepInk }]}
                onChangeText={onValueChange}
                value={enteredValue}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </View>
    )
}

export default TransferInfoInputField

const styles = StyleSheet.create({
    transferInfoInputFieldContainer: {
        width: "100%",
        backgroundColor: Colors.PureWhite,
        borderRadius: 10,
        borderWidth: 1.5,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginVertical: 6,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 1,
        rowGap: 8,
    },
    transferInfoInputFieldLabel: {
        fontFamily: "Roboto Bold",
        fontSize: 14,
        lineHeight: 16.41,
    },
    transferInfoInputFieldValue: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.DeepInk,
        padding: 0
    },
})