import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { DraxView } from 'react-native-drax';

// Components
import CreditCard from '../organisms/CreditCard';

// Data
import { draggableCreditCards } from '../templates/AirPayScreen';

// Colors
import { Colors } from '../../../constants/Colors';

// ThemeContext
import { ThemeContext } from '../../context/ThemeContext';

type CreditCardDropContainerProps = {
    checkForDroppedCard: (element: React.ReactNode) => void,
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const CreditCardDropContainer = ({ checkForDroppedCard, setSuccess }: CreditCardDropContainerProps) => {

    const { theme } = React.useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [received, setReceived] = React.useState<React.JSX.Element>(<Text style={styles.dragDropText}>Touch & hold a card then drag it
        to this box</Text>);

    return (
        <DraxView
            style={[styles.centeredContent, styles.receivingZone, { borderColor: activeColors.ForestGreen, }]}
            receivingStyle={[styles.receiving, { borderColor: activeColors.ForestGreen, }]}
            renderContent={() => {
                return (received);
            }}
            onReceiveDragDrop={(event) => {
                let cardDragged = draggableCreditCards.find((card) => card.cardColor === event.dragged.payload)
                if (cardDragged?.cardColor === "red") {
                    setSuccess(false)
                } else {
                    setSuccess(true)
                }
                if (cardDragged) {
                    setReceived(<CreditCard amount={cardDragged.cardAmount} backgroundColor={cardDragged.cardColor} number={cardDragged.cardNumber} onCardPress={cardDragged.onCardPress} />);
                }
                checkForDroppedCard(received)
            }}
        />
    )
}

export default CreditCardDropContainer

const styles = StyleSheet.create({
    dragDropText: {
        fontFamily: "Roboto Medium",
        fontSize: 20,
        lineHeight: 23.44,
        textAlign: "center",
        color: "rgba(0, 114, 54, 0.77)",
        marginHorizontal: 25
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    receivingZone: {
        height: 240,
        borderRadius: 27,
        borderWidth: 2,
        borderStyle: "dashed",
    },
    receiving: {
        backgroundColor: "#00C97426",
        borderStyle: "solid",
    },
})