import React from 'react'
import ConfirmationCodeScreen from '../templates/ConfirmationCodeScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

type ConfirmationCodePageProps = NativeStackScreenProps<RootStackParamList, "ConfirmationCode">

const ConfirmationCodePage = ({ route, navigation }: ConfirmationCodePageProps) => {

    const { mobileNumber, title } = route.params

    return (
        <ConfirmationCodeScreen navigation={navigation} mobileNumber={mobileNumber} title={title}/>
    )
}

export default ConfirmationCodePage

