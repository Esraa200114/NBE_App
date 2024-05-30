import React, { useContext } from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type TabInfoInputFieldProps = {
    label: string | null,
    enteredValue: string,
    onValueChange: (value: string) => void,
    focused: boolean,
    onFocus: () => void,
    onBlur: () => void,
    placeholder: string,
    keyboardType: KeyboardTypeOptions
}

const TabInfoInputField = ({ label, enteredValue, onValueChange, focused, onFocus, onBlur, placeholder, keyboardType }: TabInfoInputFieldProps) => {

    // const [isFocused, setIsFocused] = useState(false);
    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View
            style={[styles.tabInfoInputFieldContainer, {
                borderColor: focused ? activeColors.ForestGreen : activeColors.PureWhite, backgroundColor: activeColors.PureWhite, shadowColor: activeColors.MidnightBlack,
            }]}
        >
            {label && <Text style={[styles.tabInfoInputFieldLabel, { color: focused ? activeColors.ForestGreen : activeColors.DeepInk }]}>
                {label}
            </Text>}
            <TextInput
                placeholderTextColor={activeColors.SlateGrey}
                placeholder={placeholder}
                style={[label ? styles.tabInfoInputFieldValue : styles.tabInfoInputFieldLabel, { paddingVertical: label ? 0 : 10, color: activeColors.DeepInk }]}
                onChangeText={onValueChange}
                value={enteredValue}
                onFocus={onFocus}
                onBlur={onBlur}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default TabInfoInputField

const styles = StyleSheet.create({
    tabInfoInputFieldContainer: {
        width: "100%",
        borderRadius: 10,
        borderWidth: 1.5,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginVertical: 6,
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
        padding: 0
    },
})