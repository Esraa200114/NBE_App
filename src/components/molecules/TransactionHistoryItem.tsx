import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Colors } from '../../../constants/Colors'

type TransactionHistoryItemProp = {
    image: any,
    date: string,
    amount: string,
    title: string,
    isLogo: boolean
}

const TransactionHistoryItem = ({ image, date, amount, title, isLogo }: TransactionHistoryItemProp) => {
    return (
        <View style={styles.transactionHistoryItemContainer}>
            {image &&
                <View style={styles.transactionHistoryItemImageContainer}>
                    <Image source={image} style={!isLogo && { width: "100%", height: "100%", borderRadius: 10 }} resizeMode='contain' />
                </View>}
            <View style={[styles.transactionHistoryItemTextContainer, image && {
                marginHorizontal: 8
            }]}>
                <Text style={styles.transactionHistoryItemTitle}>{title}</Text>
                <Text style={styles.transactionHistoryItemDate}>{date}</Text>
            </View>
            <View style={styles.transactionHistoryItemAmountContainer}>
                <Text style={styles.transactionHistoryItemAmount}>{amount}</Text>
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
        backgroundColor: Colors.PureWhite,
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
        color: Colors.DeepInk
    },
    transactionHistoryItemDate: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.SlateGrey,
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
        color: Colors.DeepInk
    }
})