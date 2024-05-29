import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Screens
import TransferInfoScreen from '../templates/TransferInfoScreen'

// Navigation
import { TransferStackParamList } from '../../navigation/TransferStackNavigator'

type TransferInfoPageProps = NativeStackScreenProps<TransferStackParamList, "TransferInfo">

const TransferInfoPage = ({navigation}: TransferInfoPageProps) => {
    return (
        <TransferInfoScreen navigation={navigation} />
    )
}

export default TransferInfoPage

