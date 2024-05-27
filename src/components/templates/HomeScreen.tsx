import { StatusBar, StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'

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
import { creditCardsList } from '../../../constants/CreditCards';
import { ThemeContext } from '../../context/ThemeContext';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [showBalance, setShowBalance] = useState(true)

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const pressableCreditCards = creditCardsList.map(obj => ({ ...obj, onCardPress: () => setShowBalance(!showBalance) }))

    const getPressableCreditCard = (onCardPress: () => void, cardAmount: string, cardNumber: string, cardColor: string) => {
        return <CreditCard amount={cardAmount} number={cardNumber} backgroundColor={cardColor} onCardPress={onCardPress} />
    }

    return (
        <View style={{ backgroundColor: activeColors.MistyLavender, flex: 1 }}>
            <StatusBar backgroundColor={activeColors.MistyLavender} barStyle={theme.mode === "dark" ? "light-content" : "dark-content"} />
            <SafeAreaView style={styles.homeContainer}>
                <TabHeader onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                {showBalance &&
                    <React.Fragment>
                        <BalanceCard onPress={() => setShowBalance(!showBalance)} />
                        <BalanceMenu />
                        <SendMoneyContacts />
                    </React.Fragment>}
                {!showBalance && <CreditCardList creditCards={pressableCreditCards} onRenderCreditCard={getPressableCreditCard} />}
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