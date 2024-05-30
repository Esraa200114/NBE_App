import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import FingerPrintCard from '../atoms/FingerPrintCard'
import AbsoluteBottomWrapper from '../organisms/AbsoluteBottomWrapper'

type BalanceCardProp = {
    onPress: () => void
}

const BalanceCard = ({ onPress }: BalanceCardProp) => {
    return (
        <Pressable style={[styles.balanceCardContainer, styles.fullWidth, styles.roundedCorners]} onPress={onPress}>
            <ImageBackground source={require("../../../assets/images/card-background.png")} resizeMode='stretch' style={[styles.balanceCardBackground, styles.fitContainer, styles.roundedCorners]}>
                <LinearGradient colors={["rgba(0, 61, 29, 0.5)", "rgba(0, 61, 29, 0.5)"]} style={[styles.fitContainer, styles.balanceCardGradient, styles.roundedCorners]}>
                    <AbsoluteBottomWrapper style={styles.balanceCardContent}>
                        <Text style={[styles.balanceText, styles.pearlGrayFont]}>Balance</Text>
                        <FingerPrintCard size={15.12} radius={8} padding={4} />
                    </AbsoluteBottomWrapper>
                    <Text style={[styles.balanceValue, styles.pearlGrayFont]}>$2,374,654.25</Text>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    )
}

export default BalanceCard

const styles = StyleSheet.create({
    fitContainer: {
        width: "100%",
        height: "100%",
    },
    fullWidth: {
        width: "100%",
    },
    balanceCardContainer: {
        height: 132,
        marginVertical: 25
    },
    roundedCorners: {
        borderRadius: 22,
    },
    balanceCardBackground: {
        overflow: 'hidden'
    },
    balanceCardGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14
    },
    balanceCardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 14,
        width: "100%"
    },
    balanceText: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
    },
    balanceValue: {
        fontFamily: "Roboto Bold",
        fontSize: 25,
        lineHeight: 29.3,
    },
    pearlGrayFont: {
        color: Colors.PearlGray
    }
})