import React from 'react'
import ConfirmationCodeScreen from '../templates/ConfirmationCodeScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type ConfirmationCodePageProps = NativeStackScreenProps<RootStackParamList, "ConfirmationCode">

const ConfirmationCodePage = ({ route, navigation }: ConfirmationCodePageProps) => {

    const { mobileNumber } = route.params


    return (
        <ConfirmationCodeScreen navigation={navigation} mobileNumber={mobileNumber}/>
    )
}

export default ConfirmationCodePage

