import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import FormField from '../molecules/LoginFormField'
import FormCheckbox from '../atoms/FormCheckbox'
import FingerPrintCard from '../atoms/FingerPrintCard'

import { Colors } from '../../../constants/Colors'

// Form Validation
import * as yup from "yup"
import { Formik } from 'formik'
import { Alert } from 'react-native'
import AppButton from '../atoms/AppButton'
import { UserContext } from '../../context/UserContext'

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .max(15, 'Username must be at most 15 characters long')
        .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
        .required('Username is required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character"
        ),
});

type LoginFormProps = {
    navigation: any
}

const LoginForm = ({ navigation }: LoginFormProps) => {

    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const { user, setUser } = useContext(UserContext)

    const handleEmailFocusChange = (focused: boolean) => {
        setEmailFocused(focused);
    };

    const handlePasswordFocusChange = (focused: boolean) => {
        setPasswordFocused(focused);
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validateOnMount={true}
            onSubmit={(values) => {
                //     Alert.alert(
                //     'Login Form Values',
                //     JSON.stringify(values),
                //     [
                //         {
                //             text: 'OK',
                //             onPress: () => console.log('OK Pressed')
                //         }
                //     ],
                //     { cancelable: false }
                // )

                setUser({ userName: values.email, mobileNumber: "+201013279477" })
                navigation.replace("Drawer")
            }
            }
            validationSchema={loginValidationSchema}
        >
            {({ errors, handleSubmit, handleChange, touched, values, isValid }) => (

                <View>
                    <Text style={styles.loginFormHeading}>
                        Welcome to The National Bank of Egypt
                    </Text>

                    <View style={styles.loginFormInputField}>
                        <FormField
                            type='email'
                            focused={emailFocused}
                            onFocusChange={handleEmailFocusChange}
                            onChangeText={handleChange('email')}
                            value={values.email} />
                        {(errors.email) &&
                            <Text style={styles.errors}>{errors.email}</Text>
                        }
                    </View>

                    <View style={styles.loginFormInputField}>
                        <FormField
                            type='password'
                            focused={passwordFocused}
                            onFocusChange={handlePasswordFocusChange}
                            onChangeText={handleChange('password')}
                            value={values.password} />
                        {(errors.password) &&
                            <Text style={styles.errors}>{errors.password}</Text>
                        }
                    </View>

                    <View style={styles.loginFormActions}>
                        <FormCheckbox />
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginFormActions}>
                        <View style={styles.loginButtonContainer}>
                            <AppButton title='Log In' onPress={handleSubmit} disabled={!isValid} />
                        </View>
                        <FingerPrintCard size={28} radius={12.5} padding={8} />
                    </View>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.noAccountText}>Don’t have an account? </Text>
                        <TouchableOpacity onPress={() => { navigation.push('MobileNumber') }}>
                            <Text style={styles.signUpText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik >
    )
}

export default LoginForm

const styles = StyleSheet.create({
    loginFormHeading: {
        fontFamily: "Roboto Bold",
        fontSize: 40,
        lineHeight: 46.88,
        color: Colors.PureWhite,
        marginBottom: 30,
    },
    loginFormInputField: {
        marginBottom: 20
    },
    errors: {
        fontFamily: "Roboto Bold",
        color: Colors.VividRed,
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 4,
    },
    loginFormActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    forgotPasswordText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.MistGrey,
    },
    loginButtonContainer: {
        flex: 1, marginRight: 20
    },
    signUpContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    noAccountText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.PureWhite
    },
    signUpText: {
        fontFamily: "Roboto Bold",
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.AmberGold,
        textDecorationLine: "underline",
        textDecorationColor: Colors.AmberGold,
        textDecorationStyle: "solid"
    }
})