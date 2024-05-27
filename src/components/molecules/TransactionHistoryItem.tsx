import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { Colors } from '../../../constants/Colors'
import { ThemeContext } from '../../context/ThemeContext'

type TransactionHistoryItemProp = {
    image: any,
    date: string,
    amount: string,
    title: string,
    isLogo: boolean
}

const TransactionHistoryItem = ({ image, date, amount, title, isLogo }: TransactionHistoryItemProp) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={styles.transactionHistoryItemContainer}>
            {image &&
                <View style={[styles.transactionHistoryItemImageContainer, { backgroundColor: activeColors.PureWhite }]}>
                    <Image source={image} style={!isLogo && { width: "100%", height: "100%", borderRadius: 10 }} resizeMode='contain' />
                </View>}
            <View style={[styles.transactionHistoryItemTextContainer, image && {
                marginHorizontal: 8
            }]}>
                <Text style={[styles.transactionHistoryItemTitle, {
                    color: activeColors.DeepInk
                }]}>{title}</Text>
                <Text style={[styles.transactionHistoryItemDate, {
                    color: activeColors.SlateGrey,
                }]}>{date}</Text>
            </View>
            <View style={styles.transactionHistoryItemAmountContainer}>
                <Text style={[styles.transactionHistoryItemAmount, { color: activeColors.DeepInk }]}>{amount}</Text>
            </View>
        </View>
    )
}

export default TransactionHistoryItem

const styles = StyleSheet.create({
    transactionHistoryItemContainer: {
        width: "100%",
        flexDirection: "row",
        marginVertical: 16,
    },
    transactionHistoryItemImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    transactionHistoryItemTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    transactionHistoryItemTitle: {
        fontFamily: "Roboto Regular",
        fontSize: 18,
        lineHeight: 21.09,
    },
    transactionHistoryItemDate: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 6
    },
    transactionHistoryItemAmountContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    transactionHistoryItemAmount: {
        fontFamily: "Roboto Bold",
        fontSize: 18,
        lineHeight: 21.09,
    }
})