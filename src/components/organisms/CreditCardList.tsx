import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Components
import BoldTitle from '../atoms/BoldTitle'

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
        <View style={styles.container}>
            <View style={styles.creditCardListHeader}>
                <BoldTitle color={activeColors.DeepInk} title='Cards' />
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
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
    container: {
        marginVertical: 26
    },
    list: {
        columnGap: 14
    },
    creditCardListHeader: {
        marginBottom: 20,
    }
})