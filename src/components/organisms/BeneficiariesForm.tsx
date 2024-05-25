import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from "react-native-vector-icons/Feather";
import PropBasedIcon from '../atoms/PropBasedIcon';
import { Colors } from '../../../constants/Colors';
import TabInfoInputField from '../molecules/TabInputField';
import TabDropDownField from '../molecules/TabDropDownField';
import { bankBranchesList } from '../../../constants/DropdownInputValues';
import AppButton from '../atoms/AppButton';
// Form Validation
import * as yup from "yup";
import { Formik } from 'formik';
import BeneficiarImagePicker from '../atoms/BeneficiarImagePicker';
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TabDropdownSelectList from '../molecules/TabDropdownSelectList';

type BeneficiariesFormProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiaryDetailsForm">,
    isEditing: boolean,
    formData: Beneficiary
    onAddBeneficiary: (beneficiary: Beneficiary) => void
    onEditBeneficiary: (editedBeneficiary: Beneficiary) => void
};

const nameValidation = yup.string()
    .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.')
    .min(2, 'Must be at least 2 characters.')
    .max(50, 'Must be 50 characters or less.');

const beneficiariesFormValidationSchema = yup.object().shape({
    image: yup.string().required('Please select a photo for the beneficiary.'),
    firstName: nameValidation.required('First name is required.'),
    lastName: nameValidation.required('Last name is required.'),
    bankBranch: yup.string().required('Bank branch is required.'),
    accountNumber: yup.string()
        .matches(/^EG\d{26}$/, 'Account number must be in the format EG followed by 26 digits.')
        .required('Account number is required.'),
    phoneNumber: yup.string()
        .matches(/^\+2(010|011|012|015|016|017|018|019)\d{8}$/, 'Invalid mobile number. The number must start with +20.')
        .required('Phone number is required.'),
    email: yup.string()
        .email('Invalid email address.')
        .required('Email is required.'),
});

const BeneficiariesForm = ({ navigation, formData, isEditing, onEditBeneficiary, onAddBeneficiary }: BeneficiariesFormProps) => {

    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const [isLastNameFocused, setIsLastNameFocused] = useState(false);
    const [isAccountNumberFocused, setIsAccountNumberFocused] = useState(false);
    const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);

    let initialValues;

    if (formData) {
        initialValues = {
            image: formData.image,
            firstName: formData.firstName,
            lastName: formData.lastName,
            bankBranch: formData.bankBranch,
            accountNumber: formData.accountNumber,
            phoneNumber: formData.phoneNumber,
            email: formData.email
        }
    } else {
        initialValues = {
            image: "",
            firstName: "",
            lastName: "",
            bankBranch: "",
            accountNumber: "",
            phoneNumber: "",
            email: ""
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            validateOnMount={true}
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

                const formValues = {
                    id: formData.id,
                    image: values.image,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    bankBranch: values.bankBranch,
                    accountNumber: values.accountNumber,
                    phoneNumber: values.phoneNumber,
                    email: values.email
                };

                console.log(formValues);

                if (!isEditing) {
                    onAddBeneficiary(formValues)
                } else {
                    onEditBeneficiary(formValues)
                }
                navigation.pop(1)
            }}
            validationSchema={beneficiariesFormValidationSchema}
        >
            {({ errors, handleSubmit, handleChange, touched, values, isValid }) => (
                <React.Fragment>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" style={styles.beneficiariesFormContainer}>
                        <BeneficiarImagePicker
                            image={values.image}
                            onImageChange={handleChange('image')}
                        />
                        {(errors.image) &&
                            <Text style={styles.errors}>{errors.image.toString()}</Text>
                        }
                        <View style={styles.nameFieldsContainer}>
                            <View style={{ width: "48%" }}>
                                <TabInfoInputField
                                    enteredValue={values.firstName}
                                    focused={isFirstNameFocused}
                                    label="First name"
                                    onBlur={() => setIsFirstNameFocused(false)}
                                    onFocus={() => setIsFirstNameFocused(true)}
                                    onValueChange={handleChange('firstName')}
                                    placeholder='John'
                                />
                            </View>
                            <View style={{ width: "48%" }}>
                                <TabInfoInputField
                                    enteredValue={values.lastName}
                                    focused={isLastNameFocused}
                                    label="Last name"
                                    onBlur={() => setIsLastNameFocused(false)}
                                    onFocus={() => setIsLastNameFocused(true)}
                                    onValueChange={handleChange('lastName')}
                                    placeholder='Smith'
                                />
                            </View>
                        </View>
                        {(errors.firstName) &&
                            <Text style={styles.errors}>{errors.firstName.toString()}</Text>
                        }
                        {(errors.lastName) &&
                            <Text style={styles.errors}>{errors.lastName.toString()}</Text>
                        }
                        <TabDropdownSelectList data={bankBranchesList} label='Bank branch' placeholder='Select a bank branch' onValueChange={handleChange('bankBranch')} selectedValue={values.bankBranch} />
                        {(errors.bankBranch) &&
                            <Text style={styles.errors}>{errors.bankBranch.toString()}</Text>
                        }
                        <TabInfoInputField
                            enteredValue={values.accountNumber}
                            focused={isAccountNumberFocused}
                            label="Account number"
                            onBlur={() => setIsAccountNumberFocused(false)}
                            onFocus={() => setIsAccountNumberFocused(true)}
                            onValueChange={handleChange('accountNumber')}
                            placeholder='EG150003004250008857447010180'
                        />
                        {(errors.accountNumber) &&
                            <Text style={styles.errors}>{errors.accountNumber.toString()}</Text>
                        }
                        <TabInfoInputField
                            enteredValue={values.phoneNumber}
                            focused={isPhoneNumberFocused}
                            label="Phone number"
                            onBlur={() => setIsPhoneNumberFocused(false)}
                            onFocus={() => setIsPhoneNumberFocused(true)}
                            onValueChange={handleChange('phoneNumber')}
                            placeholder='+20 101 131 5412'
                        />
                        {(errors.phoneNumber) &&
                            <Text style={styles.errors}>{errors.phoneNumber.toString()}</Text>
                        }
                        <TabInfoInputField
                            enteredValue={values.email}
                            focused={isEmailFocused}
                            label="Email"
                            onBlur={() => setIsEmailFocused(false)}
                            onFocus={() => setIsEmailFocused(true)}
                            onValueChange={handleChange('email')}
                            placeholder='theahmadsami@gmail.com'
                        />
                        {(errors.email) &&
                            <Text style={styles.errors}>{errors.email.toString()}</Text>
                        }
                        <View style={{ height: 100 }} />
                    </ScrollView>
                    <View style={styles.addBeneficiarButton}>
                        <AppButton title={isEditing ? 'Update Beneficiar' : 'Add Beneficiar'} disabled={!isValid} onPress={handleSubmit} bgColor={Colors.ForestGreen} titleColor={Colors.PureWhite} />
                    </View>
                </React.Fragment>
            )}
        </Formik>
    );
};

export default BeneficiariesForm;

const styles = StyleSheet.create({
    beneficiariesFormContainer: {
        marginTop: 30,
        flex: 1
    },
    nameFieldsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 8
    },
    errors: {
        fontFamily: "Roboto Bold",
        color: Colors.VividRed,
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 4,
    },
    addBeneficiarButton: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginVertical: 25
    }
});
