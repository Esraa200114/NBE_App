import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Components
import BeneficiariesFormScreen from '../templates/BeneficiariesFormScreen'

// Navigation
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

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