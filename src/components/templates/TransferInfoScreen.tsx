import { StyleSheet, Text, View } from 'react-native'
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
                <BackLogoHeader navigation={navigation} />
                <TransferInfoForm />
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
        marginHorizontal: 25
    }
})