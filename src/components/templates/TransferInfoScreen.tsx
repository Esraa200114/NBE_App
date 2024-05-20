import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackLogoHeader from '../organisms/BackLogoHeader'
import { TransferStackParamList } from '../../navigation/TransferStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import TransferInfoForm from '../organisms/TransferInfoForm'

type TransferInfoScreenProps = {
    navigation: NativeStackNavigationProp<TransferStackParamList, "TransferInfo">
}

const TransferInfoScreen = ({ navigation }: TransferInfoScreenProps) => {
    return (
        <View style={styles.transferInfoContainer}>
            <SafeAreaView style={styles.transferInfoContent}>
                
                {/* KeyboardAvoidingView is a component provided by React Native that helps ensure that views automatically adjust their position when the keyboard is displayed. This adjustment is particularly useful to prevent the keyboard from covering important UI elements, such as input fields, buttons, or in your case, the footer. */}
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>

                    {/* keyboardShouldPersistTaps="handled" ensures that clicks/taps outside any input will close the keyboard if it's open. */}
                    {/* <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled"> */}
                        <BackLogoHeader navigation={navigation} showNotificationButton={false}/>
                        <TransferInfoForm navigation={navigation}/>
                    {/* </ScrollView> */}

                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default TransferInfoScreen

const styles = StyleSheet.create({
    transferInfoContainer: {
        flex: 1,
        backgroundColor: Colors.MistyLavender,
    },
    transferInfoContent: {
        flex: 1,
        marginHorizontal: 25
    }
})