import React from 'react'
import BeneficiariesFormScreen from '../templates/BeneficiariesFormScreen'
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type BeneficiariesFormPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiaryDetailsForm">

const BeneficiariesFormPage = ({ navigation }: BeneficiariesFormPageProps) => {
    return (
        <BeneficiariesFormScreen navigation={navigation}/>
    )
}

export default BeneficiariesFormPage