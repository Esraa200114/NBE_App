import React from 'react'
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

// Components
import PropBasedIcon from '../atoms/PropBasedIcon'
import CardInfo from '../molecules/CardInfo'
import LoginActionsContainer from '../molecules/LoginActionsContainer'

// Icons
import IonicsIcon from 'react-native-vector-icons/Ionicons'

// Colors
import { Colors } from '../../../constants/Colors'

export type CreditCardProps = {
    amount: string,
    number: string
    backgroundColor: string,
    onCardPress: () => void
}

const CreditCard = ({ amount, number, backgroundColor, onCardPress }: CreditCardProps) => {

    let backgroundImage;
    if (backgroundColor === "green") {
        backgroundImage = require("../../../assets/images/green-background.png")
    } else if (backgroundColor === "red") {
        backgroundImage = require("../../../assets/images/red-background.png");
    } else if (backgroundColor === "blue") {
        backgroundImage = require("../../../assets/images/blue-background.png");
    }

    return (
        <Pressable style={[styles.creditCardContainer, styles.borderedRadius]} onPress={onCardPress}>
            <ImageBackground source={backgroundImage} style={[styles.creditCardBackground, styles.borderedRadius, styles.centeredContent]}>
                <Image source={backgroundColor === "blue" ? require("../../../assets/images/mastercard-logo.png") : require("../../../assets/images/visa-logo.png")} style={styles.visaLogo} />
                <View style={styles.creditCardInfoAmountContainer}>
                    <Text style={[styles.creditCardInfoAmountText, styles.creditCardTextStyle]}>{amount}</Text>
                </View>
                <View style={[styles.creditCardNumberContainer, styles.cardDetailsContainer]}>
                    <Text style={[styles.creditCardNumberText, styles.creditCardTextStyle]}>{number}</Text>
                    <LoginActionsContainer style={styles.centeredContent}>
                        <Image source={require("../../../assets/images/card-component.png")} />
                        <View style={styles.wifiIconContainer}>
                            <PropBasedIcon component={IonicsIcon} name='wifi-outline' size={18} color={Colors.PureWhite} />
                        </View>
                    </LoginActionsContainer>
                </View>
                <View style={[styles.cardInfoContainer, styles.cardDetailsContainer]}>
                    <CardInfo title='CARD HOLDER' value="AHMAD SAMI AL-SAYED" />
                    <CardInfo title='EXPIRES' value="08/25" />
                    <CardInfo title='CVV' value="352" />
                </View>
            </ImageBackground>
        </Pressable>
    )
}

export default CreditCard

const styles = StyleSheet.create({
    creditCardContainer: {
        width: 320,
        height: 196,
    },
    creditCardBackground: {
        width: "100%",
        height: "100%",
        overflow: 'hidden',
        alignItems: 'flex-start',
        rowGap: 20,
    },
    borderedRadius: {
        borderRadius: 22,
    },
    visaLogo: {
        position: "absolute",
        right: 0,
        top: 0,
        marginRight: 30,
        marginTop: 30
    },
    creditCardInfoAmountContainer: {
        marginHorizontal: 20
    },
    creditCardInfoAmountText: {
        fontFamily: "Gemunu Libre Bold",
        textAlign: "left"
    },
    creditCardNumberContainer: {
        columnGap: 30,
    },
    creditCardNumberText: {
        fontFamily: "Gemunu Libre Regular",
    },
    creditCardTextStyle: {
        fontSize: 25,
        lineHeight: 27.1,
        color: Colors.PureWhite,
    },
    centeredContent: {
        justifyContent: 'center'
    },
    wifiIconContainer: {
        transform: [{ rotate: '90deg' }]
    },
    cardInfoContainer: {
        columnGap: 20,
    },
    cardDetailsContainer: {
        flexDirection: 'row',
        marginHorizontal: 20
    }
})