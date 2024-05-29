import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Screens
import SuccessScreen from '../templates/SuccessScreen'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

type SuccessPageProps = NativeStackScreenProps<RootStackParamList, "Success">

const SuccessPage = ({ navigation }: SuccessPageProps) => {
    return (
        <SuccessScreen navigation={navigation} />
    )
}

export default SuccessPage
