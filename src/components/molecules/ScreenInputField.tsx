import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Icons
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import IonicIcon from 'react-native-vector-icons/Ionicons';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'
import PropBasedIcon from '../atoms/PropBasedIcon'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6'

type ScreenInputFieldInputProps = {
    type: "mobileNumber" | "password" | "confirmPassword",
    focused: boolean,
    onFocusChange: (focused: boolean) => void,
    value: string,
    onChangeText: (text: string) => void
}

const ScreenInputField = ({ type, focused, onFocusChange, value, onChangeText }: ScreenInputFieldInputProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

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
            placeholderTextColor={activeColors.SlateGrey}
            style={{
                ...styles.formTextInput, color: activeColors.DeepInk,
            }}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
            onChangeText={onChangeText}
        />
    } else if (type === "password") {
        inputField = <TextInput
            placeholder={'Write your password here'}
            keyboardType='default'
            placeholderTextColor={activeColors.SlateGrey}
            style={{
                ...styles.formTextInput, color: activeColors.DeepInk,
            }}
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
            placeholderTextColor={activeColors.SlateGrey}
            style={{
                ...styles.formTextInput, color: activeColors.DeepInk,
            }}
            secureTextEntry={!showPassword}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
            onChangeText={onChangeText}
        />
    }

    return (
        <View style={[styles.screenInputFieldContainer, {
            backgroundColor: activeColors.PureWhite,
            borderColor: activeColors.PureWhite,
            shadowColor: activeColors.MidnightBlack,
        }, focused && styles.focusedScreenInputFieldContainer]}>

            {/* Input Field Icon */}
            <View style={styles.screenInputFieldIconContainer}>
                {type === "mobileNumber" && <PropBasedIcon color={Colors.SlateGrey} component={FontAwesome6Icon} name='mobile-screen' size={23} />}
                {(type === "password" || type === "confirmPassword") && <PropBasedIcon color={Colors.SlateGrey} component={SimpleLineIcon} name='lock' size={23} />}
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
                            <PropBasedIcon color={showPassword ? Colors.ForestGreen : Colors.SlateGrey} component={showPassword ? FontAwesomeIcon : IonicIcon} name={showPassword ? 'eye' : 'eye-off-outline'} size={20} />
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
        borderWidth: 1.5,
        borderStyle: "solid",
        borderRadius: 10,
        width: "100%",
        elevation: 1.5,
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
        fontSize: 16,
        lineHeight: 18.75,
        overflow: "hidden",
        paddingVertical: 2,
    },
    passwordIconContainer: {
        position: 'absolute',
        top: "25%",
        right: "4%",
    },
})