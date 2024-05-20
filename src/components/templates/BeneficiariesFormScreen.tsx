import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'
import BackLogoHeader from '../organisms/BackLogoHeader'
import BeneficiariesForm from '../organisms/BeneficiariesForm'
import { ScrollView } from 'react-native-gesture-handler'

type BeneficiariesFormScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiaryDetailsForm">
}

const BeneficiariesFormScreen = ({ navigation }: BeneficiariesFormScreenProps) => {
    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle={"dark-content"} />
            <SafeAreaView style={styles.screenContent}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                        <BackLogoHeader navigation={navigation} showNotificationButton={true} />
                        <BeneficiariesForm image={undefined} firstName={''} lastName={''} bankBranch={''} accountNumber={''} phoneNumber={''} email={''} />
                    </ScrollView>
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