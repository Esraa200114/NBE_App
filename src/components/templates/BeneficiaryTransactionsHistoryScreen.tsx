import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Navigation
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

// Components
import BeneficiarListItemView from '../molecules/BeneficiarListItemView'
import ListSeparator from '../atoms/ListSeparator'
import TransactionHistoryItem from '../molecules/TransactionHistoryItem'
import TabScreenWrapper from '../organisms/TabScreenWrapper'
import BoldTitle from '../atoms/BoldTitle'
import NoBeneficiaryTransactionsHistoryMessage from '../molecules/NoBeneficiaryTransactionsHistoryMessage'

// Colors
import { Colors } from '../../../constants/Colors'

// Data
import { beneficiariesTransactionsHistoryList } from '../../../constants/BeneficiariesTransactionsHistory'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type BeneficiaryTransactionsHistoryScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiaryTransactionsHistory">,
    beneficiary: Beneficiary
}

const BeneficiaryTransactionsHistoryScreen = ({ navigation, beneficiary }: BeneficiaryTransactionsHistoryScreenProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <TabScreenWrapper onBack={() => { }} showNotificationButton={false} showTabHeader={true} style={styles.screenContainer} isStatusBarTransparent={false}>
            <View style={{ marginVertical: 20 }}>
                <BeneficiarListItemView beneficiaryItem={beneficiary} onShowTransactions={() => navigation.pop(1)} />
            </View>
            <BoldTitle title='Transactions History' color={activeColors.DeepInk} />
            <NoBeneficiaryTransactionsHistoryMessage />
            {/* <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.transactionHistoryFlatList}
                ItemSeparatorComponent={ListSeparator}
                data={beneficiariesTransactionsHistoryList}
                renderItem={({ item }) =>
                    <TransactionHistoryItem amount={item.transactionCost} date={item.transactionDate} title={item.transactionName} image={null} isLogo={false} />}
                keyExtractor={(item, index) => index.toString()}
            /> */}
        </TabScreenWrapper>
    )
}

export default BeneficiaryTransactionsHistoryScreen

const styles = StyleSheet.create({
    screenContainer: {
        paddingHorizontal: 26,
        paddingVertical: 16,
        flex: 1
    },
    transactionHistoryFlatList: {
        marginVertical: 8,
        overflow: 'hidden',
    },
})
