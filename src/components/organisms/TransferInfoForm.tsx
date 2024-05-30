import React, { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Colors
import { Colors } from '../../../constants/Colors';

// Components
import AppButton from '../atoms/AppButton';
import TabInfoInputField from '../molecules/TabInputField';
import TabDropdownSelectList from '../molecules/TabDropdownSelectList';
import BoldTitle from '../atoms/BoldTitle';
import ErrorMessage from '../atoms/ErrorMessage';

// Navigation
import { TransferStackParamList } from '../../navigation/TransferStackNavigator';

// Data
import { typesOfTransferList, transferFromList, transferToList } from '../../../constants/DropdownInputValues';

// Validation
import * as yup from "yup";
import { Formik } from 'formik';

// Context
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

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

    const { user } = useContext(UserContext)

    let initialValues = { transferType: "", sender: "", receiver: "", amount: "", reason: "" }

    return (
        <Formik
            initialValues={initialValues}
            validateOnMount={false}
            initialErrors={initialValues}
            validateOnChange={true}
            onSubmit={(values) => {
                navigation.push("ConfirmationCode", { mobileNumber: user.mobileNumber, title: "OTP" })
            }}
            validationSchema={transferInfoFormValidationSchema}
        >
            {({ errors, handleSubmit, handleChange, values, isValid }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>

                        <View style={styles.transferInfoFormHeading}>
                            <BoldTitle title='Transfer' color={activeColors.DeepInk} />
                        </View>

                        <TabDropdownSelectList
                            data={typesOfTransferList}
                            label='Type of transfer'
                            placeholder="Select transfer type"
                            onValueChange={handleChange('transferType')}
                            selectedValue={values.transferType}
                        />
                        {(errors.transferType) && <ErrorMessage message={errors.transferType} />}

                        <TabDropdownSelectList
                            data={transferFromList}
                            label='Transfer from'
                            placeholder="Select account to transfer from"
                            selectedValue={values.sender}
                            onValueChange={handleChange('sender')}
                        />
                        {(errors.sender) && <ErrorMessage message={errors.sender} />}

                        <TabDropdownSelectList
                            data={transferToList}
                            label='Transfer to'
                            placeholder="Select account to transfer to"
                            selectedValue={values.receiver}
                            onValueChange={handleChange('receiver')}
                        />
                        {(errors.receiver) && <ErrorMessage message={errors.receiver} />}

                        <TabInfoInputField
                            label="Amount to transfer"
                            enteredValue={values.amount}
                            onValueChange={handleChange('amount')}
                            focused={isBalanceFocused}
                            onFocus={() => setIsBalanceFocused(true)}
                            onBlur={() => setIsBalanceFocused(false)}
                            placeholder='$6,580.00'
                            keyboardType='numbers-and-punctuation'
                        />
                        {(errors.amount) && <ErrorMessage message={errors.amount} />}

                        <TabInfoInputField
                            label=""
                            enteredValue={values.reason}
                            onValueChange={handleChange('reason')}
                            focused={isReasonFocused}
                            onFocus={() => setIsReasonFocused(true)}
                            onBlur={() => setIsReasonFocused(false)}
                            placeholder='Reason of transfer'
                            keyboardType='default'
                        />
                        {(errors.reason) && <ErrorMessage message={errors.reason} />}
                        <View style={styles.buttonContainer}>
                            <AppButton title='Transfer' disabled={!isValid} onPress={handleSubmit} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            )}
        </Formik>
    );
};

export default TransferInfoForm;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1
    },
    transferInfoFormHeading: {
        marginTop: 30,
        marginBottom: 18,
    },
    buttonContainer: {
        marginVertical: 20
    }
});
