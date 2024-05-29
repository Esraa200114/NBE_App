import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Screens
import MobileNumberScreen from '../templates/MobileNumberScreen'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

type MobileNumberPageProps = NativeStackScreenProps<RootStackParamList, "MobileNumber">

const MobileNumberPage = ({ navigation }: MobileNumberPageProps) => {
    return (
        <MobileNumberScreen navigation={navigation} />
    )
}

export default MobileNumberPage
