import React from 'react'
import MobileNumberScreen from '../templates/MobileNumberScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type MobileNumberPageProps = NativeStackScreenProps<RootStackParamList, "MobileNumber">

const MobileNumberPage = ({ navigation }: MobileNumberPageProps) => {
    return (
        <MobileNumberScreen navigation={navigation} />
    )
}

export default MobileNumberPage
