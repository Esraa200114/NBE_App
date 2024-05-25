import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'
import BackLogoHeader from '../organisms/BackLogoHeader'
import BeneficiariesForm from '../organisms/BeneficiariesForm'
import { ScrollView } from 'react-native-gesture-handler'
import { log } from 'react-native-reanimated'

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

    console.log("isEditing: " + isEditing);

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle={"dark-content"} />
            <SafeAreaView style={styles.screenContent}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <BackLogoHeader navigation={navigation} showNotificationButton={true} />
                        <BeneficiariesForm isEditing={isEditing} formData={beneficiary} onAddBeneficiary={onAddBeneficiary} onEditBeneficiary={onEditBeneficiary} navigation={navigation} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default BeneficiariesFormScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    screenContent: {
        flex: 1,
        backgroundColor: Colors.MistyLavender,
        paddingHorizontal: 25,
    },
})