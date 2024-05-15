import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../../constants/Colors';
import TransferInfoDropDownField from '../molecules/TransferInfoDropDownField';
import TransferInfoInputField from '../molecules/TransferInfoInputField';
import AppButton from '../atoms/AppButton';

const TransferInfoForm = () => {

    const [selectedTransferType, setSelectedTransferType] = useState("");
    const [selectedTransferFrom, setSelectedTransferFrom] = useState("");
    const [selectedTransferTo, setSelectedTransferTo] = useState("");
    const [enteredBalance, setEnteredBalance] = useState("");
    const [isBalanceFocused, setIsBalanceFocused] = useState(false)
    const [enteredReason, setEnteredReason] = useState("");
    const [isReasonFocused, setIsReasonFocused] = useState(false)

    const typesOfTransferList = [
        "Between your accounts",
        "To another person",
        "Bill payment",
        "International transfer",
        "Scheduled transfer",
        "Instant transfer",
        "One-time transfer",
        "Recurring transfer",
    ];

    const transferFromList = [
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
        <React.Fragment>
            <Text style={styles.transferInfoFormHeading}>Transfer</Text>
            <TransferInfoDropDownField
                data={typesOfTransferList}
                label='Type of transfer'
                placeholder="Select transfer type"
                selectedValue={selectedTransferType}
                onValueChange={setSelectedTransferType}
            />
            <TransferInfoDropDownField
                data={transferFromList}
                label='Transfer from'
                placeholder="Select account to transfer from"
                selectedValue={selectedTransferFrom}
                onValueChange={setSelectedTransferFrom}
            />
            <TransferInfoDropDownField
                data={transferToList}
                label='Transfer to'
                placeholder="Select account to transfer to"
                selectedValue={selectedTransferTo}
                onValueChange={setSelectedTransferTo}
            />
            <TransferInfoInputField
                label="Amount to transfer"
                enteredValue={enteredBalance}
                onValueChange={setEnteredBalance}
                focused={isBalanceFocused}
                onFocus={() => setIsBalanceFocused(true)}
                onBlur={() => setIsBalanceFocused(false)}
            />
            <TransferInfoInputField
                label=""
                enteredValue={enteredReason}
                onValueChange={setEnteredReason}
                focused={isReasonFocused}
                onFocus={() => setIsReasonFocused(true)}
                onBlur={() => setIsReasonFocused(false)}
            />
            <View style={{position: "absolute", bottom: 0, left: 0, right: 0, marginVertical: 25}}>
                <AppButton title='Transfer' disabled={false} onPress={() => { }} />
            </View>
        </React.Fragment>
    );
};

export default TransferInfoForm;

const styles = StyleSheet.create({
    transferInfoFormHeading: {
        marginTop: 30,
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: Colors.DeepInk,
        marginBottom: 18
    }
});
