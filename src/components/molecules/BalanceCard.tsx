import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import LinearGradient from 'react-native-linear-gradient'
import FingerPrintCard from '../atoms/FingerPrintCard'

type BalanceCardProp = {
    onPress: () => void
}

const BalanceCard = ({ onPress }: BalanceCardProp) => {
    return (
        <Pressable style={styles.balanceCardContainer} onPress={onPress}>
            <ImageBackground source={require("../../../assets/images/card-background.png")} resizeMode='stretch' style={styles.balanceCardBackground}>
                <LinearGradient colors={["rgba(0, 61, 29, 0.5)", "rgba(0, 61, 29, 0.5)"]} style={styles.balanceCardGradient}>
                    <View style={styles.balanceCardContent}>
                        <Text style={styles.balanceText}>Balance</Text>
                        <FingerPrintCard size={15.12} radius={8} padding={4} />
                    </View>
                    <Text style={styles.balanceValue}>$2,374,654.25</Text>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    )
}

export default BalanceCard

const styles = StyleSheet.create({
    balanceCardContainer: {
        width: "100%",
        height: 132,
        borderRadius: 22,
        backgroundColor: Colors.MistyLavender,
        marginVertical: 25
    },
    balanceCardBackground: {
        width: "100%",
        height: "100%",
        borderRadius: 22,
        overflow: 'hidden'
    },
    balanceCardGradient: {
        width: "100%",
        height: "100%",
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14
    },
    balanceCardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        margin: 14
    },
    balanceText: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.PearlGray
    },
    balanceValue: {
        fontFamily: "Roboto Bold",
        fontSize: 25,
        lineHeight: 29.3,
        color: Colors.PearlGray
    }
})