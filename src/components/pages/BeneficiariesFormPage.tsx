import React from 'react'
import BeneficiariesFormScreen from '../templates/BeneficiariesFormScreen'
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type BeneficiariesFormPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiaryDetailsForm">
    & {
        onAddBeneficiary: (beneficiary: Beneficiary) => void
        onEditBeneficiary: (updatedBeneficiary: Beneficiary) => void
    };

const BeneficiariesFormPage = ({ navigation, route, onAddBeneficiary, onEditBeneficiary }: BeneficiariesFormPageProps) => {

    const { beneficiary } = route.params;

    return (
        <BeneficiariesFormScreen navigation={navigation} beneficiary={beneficiary} onAddBeneficiary={onAddBeneficiary} onEditBeneficiary={onEditBeneficiary} />
    )
}

export default BeneficiariesFormPage