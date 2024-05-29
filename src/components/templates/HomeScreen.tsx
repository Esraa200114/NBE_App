import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

// Components
import BalanceCard from '../molecules/BalanceCard';
import BalanceMenu from '../organisms/BalanceMenu';
import SendMoneyContacts from '../organisms/SendMoneyContacts';
import TransactionsHistory from '../organisms/TransactionsHistory';
import CreditCard from '../organisms/CreditCard';
import CreditCardList from '../organisms/CreditCardList';
import TabScreenWrapper from '../organisms/TabScreenWrapper';

// Data
import { creditCardsList } from '../../../constants/CreditCards';

const HomeScreen = () => {

    const [showBalance, setShowBalance] = useState(true)

    const pressableCreditCards = creditCardsList.map(obj => ({ ...obj, onCardPress: () => setShowBalance(!showBalance) }))

    const getPressableCreditCard = (onCardPress: () => void, cardAmount: string, cardNumber: string, cardColor: string) => {
        return <CreditCard amount={cardAmount} number={cardNumber} backgroundColor={cardColor} onCardPress={onCardPress} />
    }

    return (
        <TabScreenWrapper showNotificationButton={false} style={styles.homeContainer} showTabHeader={true} onBack={() => { }} isStatusBarTransparent={false}>
            {showBalance &&
                <React.Fragment>
                    <BalanceCard onPress={() => setShowBalance(!showBalance)} />
                    <BalanceMenu />
                    <SendMoneyContacts />
                </React.Fragment>}
            {!showBalance && <CreditCardList creditCards={pressableCreditCards} onRenderCreditCard={getPressableCreditCard} />}
            <TransactionsHistory />
        </TabScreenWrapper>
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