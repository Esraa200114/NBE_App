import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import TransferInfoDropDownField from '../molecules/TransferInfoDropDownField'

const TransferInfoForm = () => {

    const typesOfTransferList = [
        "Between your accounts",
        "To another person",
        "Bill payment",
        "International transfer",
        "Scheduled transfer",
        "Instant transfer",
        "One-time transfer",
        "Recurring transfer",
    ]

    const tranferFromList = [
        "001-987654321098 - $1,234,567.89",
        "123-456789012345 - $9,876.54",
        "987-543210987654 - $3,210.98",
        "456-789012345678 - $6,543.21",
        "002-876543210987 - $2,109,876.32",
        "345-210987654321 - $7,654.32",
    ];

    const transferToList = [
        "987-654321098765 - $4,321.09",
        "234-109876543210 - $1,098.76",
        "890-432109876543 - $9,876.54",
        "567-987654321098 - $3,210.98",
        "042-653214521245 - $2,145,5874.25",
        "056-321548754230 - $1,523.48"
    ];

    return (
        <View>
            <Text style={styles.transferInfoFormHeading}>Transfer</Text>
            <TransferInfoDropDownField data={typesOfTransferList} label='Type of transfer' placeholder="Select transfer type" />
            <TransferInfoDropDownField data={tranferFromList} label='Transfer from' placeholder="Select account to transfer from" />
            <TransferInfoDropDownField data={transferToList} label='Transfer from' placeholder="Select account to transfer from" />
        </View>
    )
}

export default TransferInfoForm

const styles = StyleSheet.create({
    transferInfoFormHeading: {
        marginTop: 30,
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: Colors.DeepInk,
        marginBottom: 18
    }
})