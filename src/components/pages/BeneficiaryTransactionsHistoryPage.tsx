import React from 'react'
import BeneficiaryTransactionsHistoryScreen from '../templates/BeneficiaryTransactionsHistoryScreen'
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type BeneficiaryTransactionsHistoryPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiaryTransactionsHistory">

const BeneficiaryTransactionsHistoryPage = ({ navigation }: BeneficiaryTransactionsHistoryPageProps) => {
    return (
        <BeneficiaryTransactionsHistoryScreen navigation={navigation} />
    )
}

export default BeneficiaryTransactionsHistoryPage