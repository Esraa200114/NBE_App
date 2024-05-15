import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Colors } from '../../../constants/Colors'
import IconGenerator from '../atoms/IconGenerator'

type ScreenInputFieldInputProps = {
    type: "mobileNumber" | "password" | "confirmPassword",
    focused: boolean,
    onFocusChange: (focused: boolean) => void,
    value: string,
    onChangeText: (text: string) => void
}

const ScreenInputField = ({ type, focused, onFocusChange, value, onChangeText }: ScreenInputFieldInputProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFocus = () => {
        onFocusChange(true);
    };

    const handleBlur = () => {
        onFocusChange(false);
    };

    let inputlabel;
    if (type === "mobileNumber") {
        inputlabel = "Mobile Number"
    } else if (type === "password") {
        inputlabel = "Password"
    } else if (type === "confirmPassword") {
        inputlabel = "Confirm Password"
    }

    let inputField;
    if (type === "mobileNumber") {
        inputField = <TextInput
            placeholder={'Write your mobile number'}
            keyboardType='phone-pad'
            placeholderTextColor={Colors.SlateGrey}
            style={[styles.formTextInput, focused && styles.focusedFormTextInput]}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
            onChangeText={onChangeText}
        />
    } else if (type === "password") {
        inputField = <TextInput
            placeholder={'Write your password here'}
            keyboardType='default'
            placeholderTextColor={Colors.SlateGrey}
            style={[styles.formTextInput, focused && styles.focusedFormTextInput]}
            secureTextEntry={!showPassword}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
            onChangeText={onChangeText}
        />
    } else if (type === "confirmPassword") {
        inputField = <TextInput
            placeholder={'Re-Write your password'}
            keyboardType='default'
            placeholderTextColor={Colors.SlateGrey}
            style={[styles.formTextInput, focused && styles.focusedFormTextInput]}
            secureTextEntry={!showPassword}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
            onChangeText={onChangeText}
        />
    }

    return (
        <View style={[styles.screenInputFieldContainer, focused && styles.focusedScreenInputFieldContainer]}>

            {/* Input Field Icon */}
            <View style={styles.screenInputFieldIconContainer}>
                {type === "mobileNumber" && <IconGenerator type={"smart-phone"} />}
                {(type === "password" || type === "confirmPassword") && <IconGenerator type={"password"} />}
            </View>

            {/* Input Field & Label */}
            <View style={styles.screenInputFieldMainContainer}>
                <Text style={[styles.screenInputFieldLabel, focused && styles.focusedScreenInputFieldLabel]}>
                    {inputlabel}</Text>
                <View style={styles.defaultInputContainer}>
                    {inputField}
                    {/* Eye Icon */}
                    {(type === "password" || type === "confirmPassword") &&
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordIconContainer}>
                            <IconGenerator type={showPassword ? "eye-visible" : 'eye-hidden'} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );
};

export default ScreenInputField;

const styles = StyleSheet.create({
    screenInputFieldContainer: {
        flexDirection: "row",
        backgroundColor: Colors.PureWhite,
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: Colors.PureWhite,
        borderRadius: 10,
        width: "100%",
        elevation: 1.5,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    focusedScreenInputFieldContainer: {
        borderColor: Colors.ForestGreen,
    },
    screenInputFieldIconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    screenInputFieldMainContainer: {
        flex: 4.5,
        marginVertical: 10
    },
    screenInputFieldLabel: {
        fontFamily: "Roboto Bold",
        color: Colors.SlateGrey,
        fontSize: 14,
        lineHeight: 16.41,
        marginLeft: 3,
    },
    focusedScreenInputFieldLabel: {
        color: Colors.ForestGreen,
    },
    defaultInputContainer: {
        flexDirection: "row",
    },
    formTextInput: {
        fontFamily: "Roboto Regular",
        color: Colors.DeepInk,
        fontSize: 16,
        lineHeight: 18.75,
        overflow: "hidden",
        paddingVertical: 2,
    },
    focusedFormTextInput: {
        color: Colors.DeepInk,
    },
    passwordIconContainer: {
        position: 'absolute',
        top: "25%",
        right: "4%",
    },
})