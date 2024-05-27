import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Colors } from '../../../constants/Colors';
import AppButton from '../atoms/AppButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TransferStackParamList } from '../../navigation/TransferStackNavigator';
import TabInfoInputField from '../molecules/TabInputField';
import { typesOfTransferList, transferFromList, transferToList } from '../../../constants/DropdownInputValues';
import * as yup from "yup";
import { Formik } from 'formik';
import TabDropdownSelectList from '../molecules/TabDropdownSelectList';
import { ThemeContext } from '../../context/ThemeContext';

type TransferInfoFormProps = {
    navigation: NativeStackNavigationProp<TransferStackParamList, "TransferInfo">
}

const transferInfoFormValidationSchema = yup.object().shape({
    transferType: yup.string().required('Please select transfer type.'),
    sender: yup.string().required('Please select an account to transfer from.'),
    receiver: yup.string().required('Please select an account to transfer to.'),
    amount: yup.string()
        .matches(/^\$?\d{1,3}(,\d{3})*(\.\d{2})?$/, 'Amount must be a valid monetary value')
        .required('Amount is required'),
    reason: yup.string().optional()
});

const TransferInfoForm = ({ navigation }: TransferInfoFormProps) => {

    const [isBalanceFocused, setIsBalanceFocused] = useState(false)
    const [isReasonFocused, setIsReasonFocused] = useState(false)
    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    let initialValues = { transferType: "", sender: "", receiver: "", amount: "", reason: "" }

    return (
        <Formik
            initialValues={initialValues}
            validateOnMount={false}
            initialErrors={initialValues}
            validateOnChange={true}
            onSubmit={(values) => {
                // Alert.alert(
                //     'Form Values',
                //     JSON.stringify(values),
                //     [
                //         {
                //             text: 'OK',
                //             onPress: () => console.log('OK Pressed')
                //         }
                //     ],
                //     { cancelable: false }
                // );
                navigation.push("ConfirmationCode", { mobileNumber: "+201013279477", title: "OTP" })
            }}
            validationSchema={transferInfoFormValidationSchema}
        >
            {({ errors, handleSubmit, handleChange, touched, values, isValid }) => (
                <React.Fragment>
                    {/* keyboardShouldPersistTaps="handled" ensures that clicks/taps outside any input will close the keyboard if it's open. */}
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                        <Text style={[styles.transferInfoFormHeading, { color: activeColors.DeepInk }]}>Transfer</Text>
                        <TabDropdownSelectList
                            data={typesOfTransferList}
                            label='Type of transfer'
                            placeholder="Select transfer type"
                            onValueChange={handleChange('transferType')}
                            selectedValue={values.transferType}
                        />
                        {(errors.transferType) &&
                            <Text style={styles.errors}>{errors.transferType.toString()}</Text>
                        }
                        <TabDropdownSelectList
                            data={transferFromList}
                            label='Transfer from'
                            placeholder="Select account to transfer from"
                            selectedValue={values.sender}
                            onValueChange={handleChange('sender')}
                        />
                        {(errors.sender) &&
                            <Text style={styles.errors}>{errors.sender.toString()}</Text>
                        }
                        <TabDropdownSelectList
                            data={transferToList}
                            label='Transfer to'
                            placeholder="Select account to transfer to"
                            selectedValue={values.receiver}
                            onValueChange={handleChange('receiver')}
                        />
                        {(errors.receiver) &&
                            <Text style={styles.errors}>{errors.receiver.toString()}</Text>
                        }
                        <TabInfoInputField
                            label="Amount to transfer"
                            enteredValue={values.amount}
                            onValueChange={handleChange('amount')}
                            focused={isBalanceFocused}
                            onFocus={() => setIsBalanceFocused(true)}
                            onBlur={() => setIsBalanceFocused(false)}
                            placeholder='$6,580.00'
                        />
                        {(errors.amount) &&
                            <Text style={styles.errors}>{errors.amount.toString()}</Text>
                        }
                        <TabInfoInputField
                            label=""
                            enteredValue={values.reason}
                            onValueChange={handleChange('reason')}
                            focused={isReasonFocused}
                            onFocus={() => setIsReasonFocused(true)}
                            onBlur={() => setIsReasonFocused(false)}
                            placeholder='Reason of transfer'
                        />
                        {(errors.reason) &&
                            <Text style={styles.errors}>{errors.reason.toString()}</Text>
                        }
                        <View style={{ marginVertical: 25 }}>
                            <AppButton title='Transfer' disabled={!isValid} onPress={handleSubmit} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
                        </View>
                    </ScrollView>
                </React.Fragment>
            )}
        </Formik>
    );
};

export default TransferInfoForm;

const styles = StyleSheet.create({
    transferInfoFormHeading: {
        marginTop: 30,
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        marginBottom: 18,
    },
    errors: {
        fontFamily: "Roboto Bold",
        color: Colors.VividRed,
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 4,
    },
});
