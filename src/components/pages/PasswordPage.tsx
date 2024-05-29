import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Screens
import PasswordScreen from '../templates/PasswordScreen'
import { RootStackParamList } from '../../navigation/MainStackNavigator'

// Navigation

type PasswordPageProps = NativeStackScreenProps<RootStackParamList, "Password">

const PasswordPage = ({ navigation }: PasswordPageProps) => {
    return (
        <PasswordScreen navigation={navigation} />
    )
}

export default PasswordPage

