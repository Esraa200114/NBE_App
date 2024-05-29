import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CreditCard from './CreditCard'
import { Colors } from '../../../constants/Colors'
import { creditCardsList } from '../../../constants/CreditCards'
import { ThemeContext } from '../../context/ThemeContext'

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

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={{ marginVertical: 26 }}>
            <Text style={[styles.creditCardListHeader, {
                color: activeColors.DeepInk,
            }]}>Cards</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
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
        marginBottom: 20,
        // marginLeft: 25
    }
})