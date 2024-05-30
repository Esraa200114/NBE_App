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

// Components
import PropBasedIcon from '../atoms/PropBasedIcon'

type LoginFormFieldProps = {
    type: "email" | "password",
    focused: boolean,
    onFocusChange: (focused: boolean) => void,
    value: string,
    onChangeText: (text: string) => void
}

const LoginFormField = ({ type, focused, onFocusChange, value, onChangeText }: LoginFormFieldProps) => {

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

    return (
        <View style={[styles.formInputContainer, focused && {
            borderColor: activeColors.ForestGreen,
            backgroundColor: activeColors.PureWhite
        }]}>

            {/* Input Field Icon */}
            <View style={styles.formInputIconContainer}>
                {type === "email" ?
                    <PropBasedIcon color={focused ? Colors.SlateGrey : Colors.PureWhite} component={FontAwesomeIcon} name='at' size={20} />
                    :
                    <PropBasedIcon color={focused ? Colors.SlateGrey : Colors.PureWhite} component={SimpleLineIcon} name='lock' size={20} />
                }
            </View>

            {/* Input Field & Label */}
            <View style={styles.formInputMainContainer}>
                <Text style={[styles.formInputLabel, focused && styles.focusedFormInputLabel]}>
                    {type === "email" ? "Username" : "Password"}</Text>
                <View style={styles.defaultInputContainer}>
                    {type === "password" ?
                        <TextInput
                            placeholder={'Write your password here'}
                            placeholderTextColor={focused ? Colors.SlateGrey : Colors.PureWhite}
                            style={[styles.formTextInput, focused && { color: activeColors.DeepInk, }]}
                            secureTextEntry={!showPassword}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            value={value}
                            onChangeText={onChangeText}
                        /> :
                        <TextInput
                            placeholder={'Write your username here'}
                            placeholderTextColor={focused ? Colors.SlateGrey : Colors.PureWhite}
                            style={[styles.formTextInput, focused && { color: activeColors.DeepInk, }]}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            value={value}
                            onChangeText={onChangeText}
                        />
                    }

                    {/* Eye Icon */}
                    {type === "password" &&
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordIconContainer}>
                            {focused ?
                                <PropBasedIcon color={showPassword ? Colors.ForestGreen : Colors.SlateGrey} component={showPassword ? FontAwesomeIcon : IonicIcon} name={showPassword ? 'eye' : 'eye-off-outline'} size={20} />
                                :
                                <PropBasedIcon color={Colors.PureWhite} component={showPassword ? FontAwesomeIcon : IonicIcon} name={showPassword ? 'eye' : 'eye-off-outline'} size={20} />
                            }
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );
};

export default LoginFormField;

const styles = StyleSheet.create({
    formInputContainer: {
        flexDirection: "row",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 10,
        width: "100%"
    },
    focusedFormInputContainer: {
        borderColor: Colors.ForestGreen,
        backgroundColor: Colors.PureWhite
    },
    formInputIconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    formInputMainContainer: {
        flex: 4.5,
        marginVertical: 10
    },
    formInputLabel: {
        fontFamily: "Roboto Bold",
        color: Colors.PureWhite,
        fontSize: 14,
        lineHeight: 16.41,
        marginLeft: 3,
    },
    focusedFormInputLabel: {
        color: Colors.ForestGreen,
    },
    defaultInputContainer: {
        flexDirection: "row",
    },
    formTextInput: {
        fontFamily: "Roboto Regular",
        color: Colors.PureWhite,
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