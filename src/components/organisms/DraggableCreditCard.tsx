import React from 'react'
import { StyleSheet } from 'react-native'
import { DraxView } from 'react-native-drax'

// Components
import CreditCard from './CreditCard'

type DraggableCreditCardProps = {
    card: {
        onCardPress: () => void;
        cardAmount: string;
        cardNumber: string;
        cardColor: string;
    },
    index: number
}

const DraggableCreditCard = ({ card, index }: DraggableCreditCardProps) => {
    return (
        <DraxView
            key={index.toString()}
            style={styles.draggableCardContainer}
            dragPayload={card.cardColor}
            longPressDelay={0}
            hoverDragReleasedStyle={styles.hoverDragRelease}
            draggingStyle={styles.hoverDrag}
            hoverDraggingStyle={styles.hoverDrag}>
            <CreditCard
                amount={card.cardAmount}
                backgroundColor={card.cardColor}
                number={card.cardNumber}
                onCardPress={card.onCardPress} />
        </DraxView>
    )
}

export default DraggableCreditCard

const styles = StyleSheet.create({
    draggableCardContainer: {
        width: 320,
        height: 196,
    },
    hoverDragRelease: {
        display: "none"
    },
    hoverDrag: {
        opacity: 0.4
    }
})