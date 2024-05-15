import React from 'react'
import TransferInfoScreen from '../templates/TransferInfoScreen'
import { TransferStackParamList } from '../../navigation/TransferStackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type TransferInfoPageProps = NativeStackScreenProps<TransferStackParamList, "TransferInfo">

const TransferInfoPage = ({navigation}: TransferInfoPageProps) => {
    return (
        <TransferInfoScreen navigation={navigation}/>
    )
}

export default TransferInfoPage

