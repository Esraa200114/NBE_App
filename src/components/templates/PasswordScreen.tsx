import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Components
import AppButton from '../atoms/AppButton'
import ScreenInputField from '../molecules/ScreenInputField'
import ScreenWrapper from '../organisms/AuthenticationScreenWrapper'
import ScreenHeadings from '../molecules/ScreenHeadings'
import PasswordCriteriaIndicatorsGroup from '../organisms/PasswordCriteriaIndicatorsGroup'

// Colors
import { Colors } from '../../../constants/Colors'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'
import AuthenticationScreenWrapper from '../organisms/AuthenticationScreenWrapper'
import Spacing from '../atoms/Spacing'

type PasswordScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Password">
}

const PasswordScreen = ({ navigation }: PasswordScreenProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

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
        <AuthenticationScreenWrapper paddingValue={25} onBack={() => navigation.pop(1)} style={styles.rootContainer}>
            <ScreenHeadings heading="Set your password" subHeading='Enter a strong password for your online banking account' headingColor={activeColors.DeepInk} headingStyle={styles.heading} subHeadingColor={activeColors.SlateGrey} />
            <View style={styles.passwordFieldsContainer}>
                <ScreenInputField type={"password"} focused={passwordFocused} onFocusChange={handlePasswordFocusChange} value={password} onChangeText={passwordValidationHandler} />
                <ScreenInputField type={"confirmPassword"} focused={confirmPasswordFocused} onFocusChange={handleConfirmPasswordFocusChange} value={confirmPassword} onChangeText={confirmPasswordValidationHandler} />
            </View>
            <PasswordCriteriaIndicatorsGroup containsLowerCase={containsLowerCase} containsUpperCase={containsUpperCase} isLengthValid={isValidLength} containsNumber={containsNumber} containsSymbol={containsSymbol} />
            <Spacing />
            <View style={styles.footerButton}>
                <AppButton title='Submit' onPress={() => isValid ? navigation.push("Success") : {}} disabled={!isValid} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
            </View>
        </AuthenticationScreenWrapper>
    )
}

export default PasswordScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    heading: {
        fontSize: 20,
        lineHeight: 23.44
    },
    passwordFieldsContainer: {
        marginBottom: 20,
        gap: 20
    },
    footerButton: {
        paddingVertical: 20
    },
})
