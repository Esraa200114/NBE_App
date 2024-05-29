import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Components
import LoginFormField from '../molecules/LoginFormField'
import ErrorMessage from '../atoms/ErrorMessage'
import SignUpContainer from '../molecules/SignUpContainer'
import LoginButtonContainer from '../molecules/LoginButtonContainer'
import RememberMeContainer from '../molecules/RememberMeContainer'

// Colors
import { Colors } from '../../../constants/Colors'

// Form Validation
import * as yup from "yup"
import { Formik } from 'formik'

// User Context
import { UserContext } from '../../context/UserContext'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

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
    navigation: NativeStackNavigationProp<RootStackParamList, "Login">
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

    let initialValues = { email: '', password: '' }

    return (
        <Formik
            initialValues={initialValues}
            validateOnMount={false}
            initialErrors={initialValues}
            validateOnChange={true}
            onSubmit={(values) => {
                setUser({ userName: values.email, mobileNumber: user.mobileNumber })
                navigation.replace("Drawer")
            }}
            validationSchema={loginValidationSchema}>
            {({ errors, handleSubmit, handleChange, values, isValid }) => (
                <View style={styles.content}>
                    <Text style={[styles.boldFont, styles.largeFont, styles.largeTextStyles, styles.whiteText, { marginBottom: 10 }]}>
                        Welcome to The National Bank of Egypt
                    </Text>
                    <View>
                        <LoginFormField
                            type='email'
                            focused={emailFocused}
                            onFocusChange={handleEmailFocusChange}
                            onChangeText={handleChange('email')}
                            value={values.email} />
                        {(errors.email) && <ErrorMessage message={errors.email} />}
                    </View>
                    <View>
                        <LoginFormField
                            type='password'
                            focused={passwordFocused}
                            onFocusChange={handlePasswordFocusChange}
                            onChangeText={handleChange('password')}
                            value={values.password} />
                        {(errors.password) && <ErrorMessage message={errors.password} />}
                    </View>
                    <RememberMeContainer />
                    <LoginButtonContainer handleSubmit={handleSubmit} isValid={isValid} />
                    <SignUpContainer onPress={() => { navigation.push('MobileNumber') }} />
                </View>
            )}
        </Formik >
    )
}

export default LoginForm

const styles = StyleSheet.create({
    content: {
        rowGap: 20,
        marginBottom: 20
    },
    boldFont: {
        fontFamily: "Roboto Bold",
    },
    largeFont: {
        fontSize: 40,
    },
    largeTextStyles: {
        lineHeight: 46.88,
    },
    whiteText: {
        color: Colors.light.PureWhite,
    },
})