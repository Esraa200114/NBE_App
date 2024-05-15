import { StatusBar, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Colors } from '../../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '../organisms/TabHeader';
import BalanceCard from '../molecules/BalanceCard';
import BalanceMenu from '../organisms/BalanceMenu';
import SendMoneyContacts from '../organisms/SendMoneyContacts';
import TransactionsHistory from '../organisms/TransactionsHistory';
import CreditCard from '../organisms/CreditCard';
import CreditCardList from '../organisms/CreditCardList';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [showBalance, setShowBalance] = useState(true)

    return (
        <View style={{ backgroundColor: Colors.MistyLavender, flex: 1 }}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle="dark-content" />
            <SafeAreaView style={styles.homeContainer}>
                <TabHeader onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                {showBalance &&
                    <React.Fragment>
                        <BalanceCard onPress={() => setShowBalance(!showBalance)} />
                        <BalanceMenu />
                        <SendMoneyContacts />
                    </React.Fragment>}
                {!showBalance && <CreditCardList onCardPress={() => setShowBalance(!showBalance)}/>}
                <TransactionsHistory />
            </SafeAreaView>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeContainer: {
        paddingHorizontal: 26,
        paddingVertical: 16,
        flex: 1
    },
})