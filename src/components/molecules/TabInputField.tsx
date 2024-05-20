import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants/Colors'

type TabInfoInputFieldProps = {
    label: string | null,
    enteredValue: string,
    onValueChange: (value: string) => void,
    focused: boolean,
    onFocus: () => void,
    onBlur: () => void,
    placeholder: string
}

const TabInfoInputField = ({ label, enteredValue, onValueChange, focused, onFocus, onBlur, placeholder }: TabInfoInputFieldProps) => {

    // const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={[styles.tabInfoInputFieldContainer, { borderColor: focused ? Colors.ForestGreen : Colors.PureWhite }]}
        >
            {label && <Text style={[styles.tabInfoInputFieldLabel, { color: focused ? Colors.ForestGreen : Colors.DeepInk }]}>
                {label}
            </Text>}
            <TextInput
                placeholderTextColor={Colors.SlateGrey}
                placeholder={placeholder}
                style={[label ? styles.tabInfoInputFieldValue : styles.tabInfoInputFieldLabel, { paddingVertical: label ? 0 : 10, color: Colors.DeepInk }]}
                onChangeText={onValueChange}
                value={enteredValue}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </View>
    )
}

export default TabInfoInputField

const styles = StyleSheet.create({
    tabInfoInputFieldContainer: {
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
        rowGap: 4,
    },
    tabInfoInputFieldLabel: {
        fontFamily: "Roboto Bold",
        fontSize: 14,
        lineHeight: 16.41,
    },
    tabInfoInputFieldValue: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.DeepInk,
        padding: 0
    },
})