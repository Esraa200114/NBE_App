import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CreditCard from './CreditCard'
import { Colors } from '../../../constants/Colors'
import { creditCardsList } from '../../../constants/CreditCards'

type CreditCardListProps = {
    creditCards: {
        onCardPress: () => void;
        cardAmount: string;
        cardNumber: string;
        cardColor: string;
    }[]
    onRenderCreditCard: (onCardPress: () => void, cardAmount: string, cardNumber: string, cardColor: string) => React.JSX.Element
}

const CreditCardList = ({ creditCards, onRenderCreditCard }: CreditCardListProps) => {

    return (
        <View style={{ marginVertical: 26 }}>
            <Text style={styles.creditCardListHeader}>Cards</Text>
            <FlatList
                contentContainerStyle={{ columnGap: 14 }}
                // style={{ marginLeft: 20 }}
                data={creditCards}
                horizontal={true}
                renderItem={(item) => onRenderCreditCard(
                    item.item.onCardPress,
                    item.item.cardAmount,
                    item.item.cardNumber,
                    item.item.cardColor)} />
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
        marginBottom: 26,
        // marginLeft: 25
    }
})