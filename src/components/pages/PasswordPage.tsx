import React from 'react'
import PasswordScreen from '../templates/PasswordScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type PasswordPageProps = NativeStackScreenProps<RootStackParamList, "Password">

const PasswordPage = ({ navigation }: PasswordPageProps) => {
    return (
        <PasswordScreen navigation={navigation} />
    )
}

export default PasswordPage

