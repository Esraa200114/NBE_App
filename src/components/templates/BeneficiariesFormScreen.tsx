import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Components
import TabScreenWrapper from '../organisms/TabScreenWrapper'
import BeneficiariesForm from '../organisms/BeneficiariesForm'

// Naviagtion
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

type BeneficiariesFormScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiaryDetailsForm">,
    beneficiary: Beneficiary,
    onAddBeneficiary: (beneficiary: Beneficiary) => void,
    onEditBeneficiary: (updatedBeneficiary: Beneficiary) => void,
}

const BeneficiariesFormScreen = ({ navigation, beneficiary, onAddBeneficiary, onEditBeneficiary }: BeneficiariesFormScreenProps) => {

    let isEditing;
    if (beneficiary.firstName) {
        isEditing = true
    } else {
        isEditing = false
    }

    return (
        <TabScreenWrapper style={styles.rootContainer} showTabHeader={false} onBack={() => navigation.pop(1)} showNotificationButton={true} isStatusBarTransparent={false}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <BeneficiariesForm isEditing={isEditing} formData={beneficiary} onAddBeneficiary={onAddBeneficiary} onEditBeneficiary={onEditBeneficiary} navigation={navigation} />
            </KeyboardAvoidingView>
        </TabScreenWrapper >
    )
}

export default BeneficiariesFormScreen

const styles = StyleSheet.create({ 
    rootContainer: {
        paddingHorizontal: 25,
        flex: 1
    },
    container: {
        flex: 1
    },
})