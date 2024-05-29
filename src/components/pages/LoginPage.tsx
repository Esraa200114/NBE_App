import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Screens
import LoginScreen from '../templates/LoginScreen'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

type LoginPageProps = NativeStackScreenProps<RootStackParamList, "Login">

const LoginPage = ({ navigation }: LoginPageProps) => {
    return (
        <LoginScreen navigation={navigation} />
    )
}

export default LoginPage
