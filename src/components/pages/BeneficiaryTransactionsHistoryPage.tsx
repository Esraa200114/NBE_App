import React from 'react'
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import BeneficiaryTransactionsHistoryScreen from '../templates/BeneficiaryTransactionsHistoryScreen'

type BeneficiaryTransactionsHistoryPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiaryTransactionsHistory">

const BeneficiaryTransactionsHistoryPage = ({ navigation, route }: BeneficiaryTransactionsHistoryPageProps) => {
    
    const {beneficiary} = route.params

    return (
        <BeneficiaryTransactionsHistoryScreen navigation={navigation} beneficiary={beneficiary}/>
    )
}

export default BeneficiaryTransactionsHistoryPage