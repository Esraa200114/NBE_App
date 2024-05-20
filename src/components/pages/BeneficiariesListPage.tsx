import React from 'react'
import BeneficiariesListScreen from '../templates/BeneficiariesListScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'

type BeneficiariesListPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiariesList">

const BeneficiariesListPage = ({ navigation }: BeneficiariesListPageProps) => {
    return (
        <BeneficiariesListScreen navigation={navigation} />
    )
}

export default BeneficiariesListPage
