import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Colors
import { Colors } from '../../../constants/Colors';

// Data
import { bankBranchesList } from '../../../constants/DropdownInputValues';

// Form Validation
import * as yup from "yup";
import { Formik } from 'formik';

// Components
import BeneficiarImagePicker from '../atoms/BeneficiarImagePicker';
import TabDropdownSelectList from '../molecules/TabDropdownSelectList';
import ErrorMessage from '../atoms/ErrorMessage';
import AppButton from '../atoms/AppButton';
import TabInfoInputField from '../molecules/TabInputField';

// Navigation
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

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

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

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
            validateOnMount={false}
            initialErrors={initialValues}
            validateOnChange={true}
            onSubmit={(values) => {

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

                if (!isEditing) {
                    onAddBeneficiary(formValues)
                } else {
                    onEditBeneficiary(formValues)
                }
                navigation.pop(1)
            }}
            validationSchema={beneficiariesFormValidationSchema}
        >
            {({ errors, handleSubmit, handleChange, values, isValid }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled" style={styles.beneficiariesFormContainer} showsVerticalScrollIndicator={false}>

                        <BeneficiarImagePicker
                            image={values.image}
                            onImageChange={handleChange('image')}
                        />
                        {(errors.image) && <ErrorMessage message={errors.image.toString()} />}

                        <View style={styles.nameFieldsContainer}>
                            <View style={styles.nameFieldContainer}>
                                <TabInfoInputField
                                    enteredValue={values.firstName}
                                    label="First name"
                                    onBlur={() => setIsFirstNameFocused(false)}
                                    onFocus={() => setIsFirstNameFocused(true)}
                                    onValueChange={handleChange('firstName')}
                                    placeholder='John'
                                    focused={isFirstNameFocused}
                                    keyboardType='default'
                                />
                                {(errors.firstName) && <ErrorMessage message={errors.firstName.toString()} />}
                            </View>
                            <View style={styles.nameFieldContainer}>
                                <TabInfoInputField
                                    enteredValue={values.lastName}
                                    focused={isLastNameFocused}
                                    label="Last name"
                                    onBlur={() => setIsLastNameFocused(false)}
                                    onFocus={() => setIsLastNameFocused(true)}
                                    onValueChange={handleChange('lastName')}
                                    placeholder='Smith'
                                    keyboardType='default'
                                />
                                {(errors.lastName) && <ErrorMessage message={errors.lastName.toString()} />}
                            </View>
                        </View>

                        <TabDropdownSelectList data={bankBranchesList} label='Bank branch' placeholder='Select a bank branch' onValueChange={handleChange('bankBranch')} selectedValue={values.bankBranch} />
                        {(errors.bankBranch) && <ErrorMessage message={errors.bankBranch.toString()} />}

                        <TabInfoInputField
                            enteredValue={values.accountNumber}
                            focused={isAccountNumberFocused}
                            label="Account number"
                            onBlur={() => setIsAccountNumberFocused(false)}
                            onFocus={() => setIsAccountNumberFocused(true)}
                            onValueChange={handleChange('accountNumber')}
                            placeholder='EG150003004250008857447010180'
                            keyboardType='name-phone-pad'
                        />
                        {(errors.accountNumber) && <ErrorMessage message={errors.accountNumber.toString()} />}

                        <TabInfoInputField
                            enteredValue={values.phoneNumber}
                            focused={isPhoneNumberFocused}
                            label="Phone number"
                            onBlur={() => setIsPhoneNumberFocused(false)}
                            onFocus={() => setIsPhoneNumberFocused(true)}
                            onValueChange={handleChange('phoneNumber')}
                            placeholder='+20 101 131 5412'
                            keyboardType='phone-pad'
                        />
                        {(errors.phoneNumber) && <ErrorMessage message={errors.phoneNumber.toString()} />}

                        <TabInfoInputField
                            enteredValue={values.email}
                            focused={isEmailFocused}
                            label="Email"
                            onBlur={() => setIsEmailFocused(false)}
                            onFocus={() => setIsEmailFocused(true)}
                            onValueChange={handleChange('email')}
                            placeholder='theahmadsami@gmail.com'
                            keyboardType='email-address'
                        />
                        {(errors.email) && <ErrorMessage message={errors.email} />}

                        <View style={styles.addBeneficiarButton}>
                            <AppButton title={isEditing ? 'Update Beneficiar' : 'Add Beneficiar'} disabled={!isValid} onPress={handleSubmit} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            )}
        </Formik>
    );
};

export default BeneficiariesForm;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1
    },
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
    nameFieldContainer: {
        width: "48%"
    },
    addBeneficiarButton: {
        marginVertical: 25
    }
});
