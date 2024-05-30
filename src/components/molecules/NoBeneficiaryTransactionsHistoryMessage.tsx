import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Colors
import { Colors } from '../../../constants/Colors'

const NoBeneficiaryTransactionsHistoryMessage = () => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={styles.noTransactionsHistoryMessageContainer}>
            <Image source={theme.mode === "dark" ? require("../../../assets/images/dark-no-transaction-history.png"): require("../../../assets/images/no-transactions-history.png")} />
            <Text style={[styles.noHistoryText, styles.centeredText, { color: activeColors.MidnightGray, }]}>No History</Text>
            <Text style={[styles.noTransactionsText, styles.centeredText, { color: activeColors.DeepAmethyst, }]}>Not a single transaction was made to this account</Text>
        </View>
    )
}

export default NoBeneficiaryTransactionsHistoryMessage

const styles = StyleSheet.create({
    noTransactionsHistoryMessageContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    noHistoryText: {
        fontFamily: "Roboto Medium",
        fontSize: 18,
        lineHeight: 21.09,
        marginVertical: 12
    },
    noTransactionsText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        paddingHorizontal: 44,
        marginVertical: 6
    },
    centeredText: {
        textAlign: "center",
    }
})