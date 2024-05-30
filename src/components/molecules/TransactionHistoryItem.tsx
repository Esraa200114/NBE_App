import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
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
                <View style={[styles.transactionHistoryItemImageContainer, styles.centeredContent, { backgroundColor: activeColors.PureWhite }]}>
                    <Image source={image} style={!isLogo && styles.logo} resizeMode='contain' />
                </View>}
            <View style={[styles.transactionHistoryItemTextContainer, image && {
                marginHorizontal: 8
            }]}>
                <Text style={[styles.transactionHistoryItemTitle, styles.regularText, {
                    color: activeColors.DeepInk
                }]}>{title}</Text>
                <Text style={[styles.transactionHistoryItemDate, styles.regularText, {
                    color: activeColors.SlateGrey,
                }]}>{date}</Text>
            </View>
            <View style={styles.centeredContent}>
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
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    centeredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactionHistoryItemTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    transactionHistoryItemTitle: {
        fontSize: 18,
        lineHeight: 21.09,
    },
    transactionHistoryItemDate: {
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 6
    },
    regularText: {
        fontFamily: "Roboto Regular",
    },
    transactionHistoryItemAmount: {
        fontFamily: "Roboto Bold",
        fontSize: 18,
        lineHeight: 21.09,
    },
    logo: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    }
})