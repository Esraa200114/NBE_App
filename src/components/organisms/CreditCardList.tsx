import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CreditCard from './CreditCard'
import { Colors } from '../../../constants/Colors'

type CreditCardListProps = {
    onCardPress: () => void
}

const CreditCardList = ({ onCardPress }: CreditCardListProps) => {

    const creditCards = [
        {
            cardAmount: "$125,381.15",
            cardNumber: "**** **** **** 6506",
            cardColor: 'green',
            onCardPress: onCardPress
        },
        {
            cardAmount: "$42,464.15",
            cardNumber: "**** **** **** 8154",
            cardColor: 'red',
            onCardPress: onCardPress
        },
        {
            cardAmount: "$3,652.15",
            cardNumber: "**** **** **** 2495",
            cardColor: 'blue',
            onCardPress: onCardPress
        }
    ]

    return (
        <View style={{ marginVertical: 26 }}>
            <Text style={styles.creditCardListHeader}>Cards</Text>
            <FlatList
                contentContainerStyle={{ columnGap: 14 }}
                data={creditCards}
                horizontal={true}
                renderItem={(item) => <CreditCard amount={item.item.cardAmount} number={item.item.cardNumber} backgroundColor={item.item.cardColor} onCardPress={onCardPress}/>} />
        </View>
    )
}

export default CreditCardList

const styles = StyleSheet.create({
    creditCardListHeader: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: Colors.DeepInk,
        marginBottom: 26
    }
})