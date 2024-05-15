import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropBasedIcon from '../atoms/PropBasedIcon'
import IonicsIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../../constants/Colors'
import CardInfo from '../molecules/CardInfo'

type CreditCardProps = {
    amount: string,
    number: string
    backgroundColor: string,
    onCardPress: () => void
}

const CreditCard = ({ amount, number, backgroundColor, onCardPress }: CreditCardProps) => {

    const backgroundImage = backgroundColor === "green"
        ? require("../../../assets/images/green-background.png")
        : require("../../../assets/images/red-background.png");

    return (
        <Pressable style={styles.creditCardContainer} onPress={onCardPress}>
            <ImageBackground source={backgroundImage} style={styles.creditCardBackground}>
                <Image source={require("../../../assets/images/visa-logo.png")} style={styles.visaLogo} />
                <View style={styles.creditCardInfoAmountContainer}>
                    <Text style={styles.creditCardInfoAmountText}>{amount}</Text>
                </View>
                <View style={styles.creditCardNumberContainer}>
                    <Text style={styles.creditCardNumberText}>{number}</Text>
                    <View style={styles.creditCardIconsContainer}>
                        <Image source={require("../../../assets/images/card-component.png")} />
                        <View style={styles.wifiIconContainer}>
                            <PropBasedIcon component={IonicsIcon} name='wifi-outline' size={18} color={Colors.PureWhite} />
                        </View>
                    </View>
                </View>
                <View style={styles.cardInfoContainer}>
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
        width: 326,
        height: 196,
        borderRadius: 22,
    },
    creditCardBackground: {
        width: "100%",
        height: "100%",
        borderRadius: 22,
        overflow: 'hidden',
        alignItems: 'flex-start',
        justifyContent: 'center',
        rowGap: 20
    },
    visaLogo: {
        position: "absolute",
        right: 0,
        top: 0,
        marginRight: 30,
        marginTop: 30
    },
    creditCardInfoAmountContainer: {
        marginHorizontal: 30
    },
    creditCardInfoAmountText: {
        fontFamily: "Gemunu Libre Bold",
        fontSize: 25,
        lineHeight: 27.1,
        color: Colors.PureWhite,
        textAlign: "left"
    },
    creditCardNumberContainer: {
        flexDirection: 'row',
        columnGap: 30,
        marginHorizontal: 30
    },
    creditCardNumberText: {
        fontFamily: "Gemunu Libre Regular",
        fontSize: 25,
        lineHeight: 27.1,
        color: Colors.PureWhite
    },
    creditCardIconsContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    wifiIconContainer: {
        transform: [{ rotate: '90deg' }]
    },
    cardInfoContainer: {
        flexDirection: 'row',
        columnGap: 20,
        marginHorizontal: 30
    }
})