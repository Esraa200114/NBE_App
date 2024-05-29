import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Navigation
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'

// Screens
import BeneficiaryTransactionsHistoryScreen from '../templates/BeneficiaryTransactionsHistoryScreen'

type BeneficiaryTransactionsHistoryPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiaryTransactionsHistory">

const BeneficiaryTransactionsHistoryPage = ({ navigation, route }: BeneficiaryTransactionsHistoryPageProps) => {
    
    const {beneficiary} = route.params

    return (
        <BeneficiaryTransactionsHistoryScreen navigation={navigation} beneficiary={beneficiary}/>
    )
}

export default BeneficiaryTransactionsHistoryPage