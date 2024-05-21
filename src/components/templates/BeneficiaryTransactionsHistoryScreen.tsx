import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import TabHeader from '../organisms/TabHeader'
import BeneficiarListItemView from '../molecules/BeneficiarListItemView'
import { Colors } from '../../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import ListSeparator from '../atoms/ListSeparator'
import { beneficiariesTransactionsHistoryList } from '../../../constants/BeneficiariesTransactionsHistory'
import TransactionHistoryItem from '../molecules/TransactionHistoryItem'

type BeneficiaryTransactionsHistoryScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiaryTransactionsHistory">,
    beneficiary: Beneficiary
}

const BeneficiaryTransactionsHistoryScreen = ({ navigation, beneficiary }: BeneficiaryTransactionsHistoryScreenProps) => {

    const drawerNavigation = useNavigation();

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle={"dark-content"} />
            <SafeAreaView style={styles.screenContent}>
                <View style={styles.screenHeader}>
                    <TabHeader onPress={(() => drawerNavigation.dispatch(DrawerActions.openDrawer()))} />
                </View>
                <BeneficiarListItemView beneficiaryItem={beneficiary} onShowTransactions={() => navigation.pop(1)} />
                <Text style={styles.transactionsListTitle}>Transactions History</Text>
                {/* <View style={styles.noTransactionsHistoryMessageContainer}>
                    <Image source={require("../../../assets/images/no-transactions-history.png")} />
                    <Text style={styles.noHistoryText}>No History</Text>
                    <Text style={styles.noTransactionsText}>Not a single transaction was made to this account</Text>
                </View> */}
                <FlatList
                    contentContainerStyle={styles.transactionHistoryFlatList}
                    ItemSeparatorComponent={ListSeparator}
                    data={beneficiariesTransactionsHistoryList}
                    renderItem={({ item, index }) => <TransactionHistoryItem amount={item.transactionCost} date={item.transactionDate} title={item.transactionName} image={null} isLogo={false} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        </View >
    )
}

export default BeneficiaryTransactionsHistoryScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    screenContent: {
        flex: 1,
        backgroundColor: Colors.MistyLavender,
    },
    screenHeader: {
        paddingHorizontal: 25,
        paddingTop: 16,
        marginBottom: 28
    },
    transactionsListTitle: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: Colors.DeepInk,
        marginHorizontal: 25,
        marginTop: 26
    },
    noTransactionsHistoryMessageContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    noHistoryText: {
        fontFamily: "Roboto Medium",
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: "center",
        color: Colors.MidnightGray,
        marginVertical: 12
    },
    noTransactionsText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        textAlign: "center",
        color: Colors.DeepAmethyst,
        paddingHorizontal: 44,
        marginVertical: 6
    },
    transactionHistoryFlatList: {
        marginVertical: 8,
        overflow: 'hidden',
        marginHorizontal: 25
    },
})
