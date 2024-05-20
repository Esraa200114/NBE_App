import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { RootStackParamList } from '../../App'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppButton from '../atoms/AppButton'
import BackLogoHeader from '../organisms/BackLogoHeader'
import { Colors } from '../../../constants/Colors'
import PasswordCriteriaIndicator from '../molecules/PasswordCriteriaIndicator'
import ScreenInputField from '../molecules/ScreenInputField'
import { Platform } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigator'

type PasswordScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Password">
}

const PasswordScreen = ({ navigation }: PasswordScreenProps) => {

    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [containsLowerCase, setContainsLowerCase] = useState(false)
    const [containsUpperCase, setContainsUpperCase] = useState(false)
    const [isValidLength, setIsValidLength] = useState(false)
    const [containsNumber, setContainsNumber] = useState(false)
    const [containsSymbol, setContainsSymbol] = useState(false)

    const [isValid, setIsValid] = useState(false)

    const handlePasswordFocusChange = (focused: boolean) => {
        setPasswordFocused(focused);
    };

    const handleConfirmPasswordFocusChange = (focused: boolean) => {
        setConfirmPasswordFocused(focused);
    };

    const passwordValidationHandler = (enteredPassword: string) => {

        if (enteredPassword.length >= 8) {
            setIsValidLength(true)
        } else {
            setIsValidLength(false)
        }

        if (/[A-Z]/.test(enteredPassword)) {
            setContainsUpperCase(true)
        } else {
            setContainsUpperCase(false)
        }

        if (/[a-z]/.test(enteredPassword)) {
            setContainsLowerCase(true)
        } else {
            setContainsLowerCase(false)
        }

        if (/[0-9]/.test(enteredPassword)) {
            setContainsNumber(true)
        } else {
            setContainsNumber(false)
        }

        if (/[@$!%*#?&~^_-]/.test(enteredPassword)) {
            setContainsSymbol(true)
        } else {
            setContainsSymbol(false)
        }

        if (isValidLength && containsUpperCase && containsLowerCase && containsNumber && containsSymbol && confirmPassword === enteredPassword) {
            setIsValid(true)
            console.log("Password is valid");

        } else {
            setIsValid(false)
            console.log("Confirm password is invalid");
        }

        setPassword(enteredPassword)
    }

    const confirmPasswordValidationHandler = (enteredConfirmPassword: string) => {

        if (isValidLength && containsUpperCase && containsLowerCase && containsNumber && containsSymbol && enteredConfirmPassword === password) {
            setIsValid(true)
            console.log("Password is valid");

        } else {
            setIsValid(false)
            console.log("Confirm password is invalid");
        }

        setConfirmPassword(enteredConfirmPassword)
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
                <View style={styles.passwordFormContainer}>
                    <StatusBar backgroundColor={Colors.MistyLavender} barStyle="dark-content" />
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.screenContent}>
                            <BackLogoHeader navigation={navigation} showNotificationButton={false}/>
                            <View style={styles.headingsContainer}>
                                <Text style={styles.screenHeading}>Set your password</Text>
                                <Text style={styles.screenSubheading}>Enter a strong password for your online banking account</Text>
                            </View>

                            <View style={styles.passwordFieldsContainer}>
                                {/* Password Input */}
                                <ScreenInputField type={"password"} focused={passwordFocused} onFocusChange={handlePasswordFocusChange} value={password} onChangeText={passwordValidationHandler} />
                                {/* Confirm assword Input */}
                                <ScreenInputField type={"confirmPassword"} focused={confirmPasswordFocused} onFocusChange={handleConfirmPasswordFocusChange} value={confirmPassword} onChangeText={confirmPasswordValidationHandler} />
                            </View>

                            <View style={styles.passwordCriteriaContainer}>
                                <PasswordCriteriaIndicator text='Lower case letter' iconName={containsLowerCase ? 'filled-circle' : 'empty-circle'} />
                                <PasswordCriteriaIndicator text='Upper case letter' iconName={containsUpperCase ? 'filled-circle' : 'empty-circle'} />
                                <PasswordCriteriaIndicator text='Minimum 8 characters' iconName={isValidLength ? 'filled-circle' : 'empty-circle'} />
                                <PasswordCriteriaIndicator text='Number' iconName={containsNumber ? 'filled-circle' : 'empty-circle'} />
                                <PasswordCriteriaIndicator text='Special character' iconName={containsSymbol ? 'filled-circle' : 'empty-circle'} />
                            </View>
                            <View style={{ flex: 1 }} />

                            <View style={styles.footerButton}>
                                <AppButton title='Submit' onPress={() => isValid ? navigation.push("Success"): {}} disabled={!isValid} bgColor={Colors.ForestGreen} titleColor={Colors.PureWhite}/>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default PasswordScreen

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    passwordFormContainer: {
        flex: 1,
        backgroundColor: Colors.MistyLavender,
    },
    screenContent: {
        paddingHorizontal: 26,
        flex: 1
    },
    headingsContainer: {
        marginTop: 30,
    },
    screenHeading: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: Colors.DeepInk,
        marginBottom: 6
    },
    screenSubheading: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.SlateGrey,
    },
    passwordFieldsContainer: {
        marginVertical: 20,
        gap: 20
    },
    passwordCriteriaContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    screenFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerButton: {
        marginVertical: 20
    },
})