import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type BeneficiaryTransactionsHistoryScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiaryTransactionsHistory">
}

const BeneficiaryTransactionsHistoryScreen = ({ navigation }: BeneficiaryTransactionsHistoryScreenProps) => {
    return (
        <View>
            <Text>BeneficiaryTransactionsHistoryScreen</Text>
        </View>
    )
}

export default BeneficiaryTransactionsHistoryScreen

const styles = StyleSheet.create({})