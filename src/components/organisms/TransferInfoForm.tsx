import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../../constants/Colors';
import AppButton from '../atoms/AppButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TransferStackParamList } from '../../navigation/TransferStackNavigator';
import TabInfoInputField from '../molecules/TabInputField';
import { typesOfTransferList, transferFromList, transferToList } from '../../../constants/TransferFormDropdownInputValues';
import TabDropDownField from '../molecules/TabDropDownField';

type TransferInfoFormProps = {
    navigation: NativeStackNavigationProp<TransferStackParamList, "TransferInfo">
}

const TransferInfoForm = ({ navigation }: TransferInfoFormProps) => {

    const [selectedTransferType, setSelectedTransferType] = useState("");
    const [selectedTransferFrom, setSelectedTransferFrom] = useState("");
    const [selectedTransferTo, setSelectedTransferTo] = useState("");
    const [enteredBalance, setEnteredBalance] = useState("");
    const [isBalanceFocused, setIsBalanceFocused] = useState(false)
    const [enteredReason, setEnteredReason] = useState("");
    const [isReasonFocused, setIsReasonFocused] = useState(false)

    return (
        <React.Fragment>
            <Text style={styles.transferInfoFormHeading}>Transfer</Text>
            <TabDropDownField
                data={typesOfTransferList}
                label='Type of transfer'
                placeholder="Select transfer type"
                selectedValue={selectedTransferType}
                onValueChange={setSelectedTransferType}
            />
            <TabDropDownField
                data={transferFromList}
                label='Transfer from'
                placeholder="Select account to transfer from"
                selectedValue={selectedTransferFrom}
                onValueChange={setSelectedTransferFrom}
            />
            <TabDropDownField
                data={transferToList}
                label='Transfer to'
                placeholder="Select account to transfer to"
                selectedValue={selectedTransferTo}
                onValueChange={setSelectedTransferTo}
            />
            <TabInfoInputField
                label="Amount to transfer"
                enteredValue={enteredBalance}
                onValueChange={setEnteredBalance}
                focused={isBalanceFocused}
                onFocus={() => setIsBalanceFocused(true)}
                onBlur={() => setIsBalanceFocused(false)}
            />
            <TabInfoInputField
                label=""
                enteredValue={enteredReason}
                onValueChange={setEnteredReason}
                focused={isReasonFocused}
                onFocus={() => setIsReasonFocused(true)}
                onBlur={() => setIsReasonFocused(false)}
            />
            <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, marginVertical: 25 }}>
                <AppButton title='Transfer' disabled={false} onPress={() => { navigation.push("ConfirmationCode", { mobileNumber: "+201013279477", title: "OTP" }) }} bgColor={Colors.ForestGreen} titleColor={Colors.PureWhite} />
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
