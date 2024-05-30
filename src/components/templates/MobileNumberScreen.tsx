import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Components
import ScreenInputField from '../molecules/ScreenInputField'
import ScreenHeadings from '../molecules/ScreenHeadings'
import ErrorMessage from '../atoms/ErrorMessage'
import MobileNumberFormFooter from '../molecules/MobileNumberFormFooter'
import AbsoluteBottomWrapper from '../organisms/AbsoluteBottomWrapper'
import AuthenticationScreenWrapper from '../organisms/AuthenticationScreenWrapper'

// Form Validation
import * as yup from "yup"
import { Formik } from 'formik'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

const mobileNumberValidationSchema = yup.object().shape({
    mobileNumber: yup.string()
        .matches(/^\+2(010|011|012|015|016|017|018|019)\d{8}$/, 'Invalid mobile number. The number must start with +20')
        .required('Mobile number is required'),
});

type MobileNumberScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "MobileNumber">
}

const MobileNumberScreen = ({ navigation }: MobileNumberScreenProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [mobileNumberFocused, setMobileNumberFocused] = useState(false);

    const handleMobileNumberFocusChange = (focused: boolean) => {
        setMobileNumberFocused(focused);
    };

    let initialValues = { mobileNumber: '' }

    return (
        <Formik
            initialValues={initialValues}
            validateOnMount={false}
            initialErrors={initialValues}
            validateOnChange={true}
            onSubmit={(values) =>
                navigation.push("ConfirmationCode", { mobileNumber: values.mobileNumber, title: "Verification" })
            }
            validationSchema={mobileNumberValidationSchema}
        >
            {({ handleChange, handleSubmit, values, errors, isValid }) => (
                <AuthenticationScreenWrapper style={{ flex: 1 }} paddingValue={26} onBack={() => navigation.pop(1)}>
                    <ScreenHeadings heading='Mobile number' subHeading='Enter the mobile number registered in the bank' headingColor={activeColors.DeepInk} headingStyle={styles.heading} subHeadingColor={activeColors.SlateGrey} />
                    <ScreenInputField type="mobileNumber" focused={mobileNumberFocused} onFocusChange={handleMobileNumberFocusChange} onChangeText={handleChange('mobileNumber')} value={values.mobileNumber} />
                    {(errors.mobileNumber) && <ErrorMessage message={errors.mobileNumber} />}
                    <AbsoluteBottomWrapper>
                        <MobileNumberFormFooter handleSubmit={handleSubmit} isValid={isValid} />
                    </AbsoluteBottomWrapper>
                </AuthenticationScreenWrapper>
            )}
        </Formik>
    )
}

export default MobileNumberScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        lineHeight: 23.44
    },
})