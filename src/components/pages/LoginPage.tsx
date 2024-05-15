import React from 'react'
import LoginScreen from '../templates/LoginScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type LoginPageProps = NativeStackScreenProps<RootStackParamList, "Login">

const LoginPage = ({ navigation }: LoginPageProps) => {
    return (
        <LoginScreen navigation={navigation} />
    )
}

export default LoginPage
