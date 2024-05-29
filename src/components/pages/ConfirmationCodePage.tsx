import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Screens
import ConfirmationCodeScreen from '../templates/ConfirmationCodeScreen'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

type ConfirmationCodePageProps = NativeStackScreenProps<RootStackParamList, "ConfirmationCode">

const ConfirmationCodePage = ({ route, navigation }: ConfirmationCodePageProps) => {

    const { mobileNumber, title } = route.params

    return (
        <ConfirmationCodeScreen navigation={navigation} mobileNumber={mobileNumber} title={title} />
    )
}

export default ConfirmationCodePage

