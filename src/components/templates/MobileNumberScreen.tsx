import { Alert, Keyboard, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'
import BackLogoHeader from '../organisms/BackLogoHeader'
import AppButton from '../atoms/AppButton'
import ScreenInputField from '../molecules/ScreenInputField'

// Form Validation
import * as yup from "yup"
import { Formik } from 'formik'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

const mobileNumberValidationSchema = yup.object().shape({
    mobileNumber: yup.string()
        .matches(/^(?:\+?2)?(010|011|012|015|016|017|018|019)\d{8}$/, 'Invalid mobile number')
        .required('Mobile number is required'),
});

type MobileNumberScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "MobileNumber">
}

const MobileNumberScreen = ({ navigation }: MobileNumberScreenProps) => {

    const [mobileNumberFocused, setMobileNumberFocused] = useState(false);

    const handleMobileNumberFocusChange = (focused: boolean) => {
        setMobileNumberFocused(focused);
    };

    return (
        <Formik
            initialValues={{ mobileNumber: '' }}
            validateOnMount={true}
            onSubmit={(values) =>
                //     Alert.alert(
                //     'Mobile Number Entered',
                //     JSON.stringify(values),
                //     [
                //         {
                //             text: 'OK',
                //             onPress: () => console.log('OK Pressed')
                //         }
                //     ],
                //     { cancelable: false }
                // )
                navigation.push("ConfirmationCode", { mobileNumber: values.mobileNumber })
            }
            validationSchema={mobileNumberValidationSchema}
        >
            {({ handleChange, handleSubmit, values, touched, errors, isValid }) => (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.mobileNumberContainer}>
                        <StatusBar backgroundColor={Colors.MistyLavender} barStyle="dark-content" />
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={styles.screenContent}>
                                <BackLogoHeader navigation={navigation} />
                                <View style={styles.headingsContainer}>
                                    <Text style={styles.screenHeading}>Mobile number</Text>
                                    <Text style={styles.screenSubheading}>Enter the mobile number registered in the bank</Text>
                                </View>
                                {/* Mobile Number text Input */}
                                <ScreenInputField type="mobileNumber" focused={mobileNumberFocused} onFocusChange={handleMobileNumberFocusChange} onChangeText={handleChange('mobileNumber')}
                                    value={values.mobileNumber} />
                                {(errors.mobileNumber) &&
                                    <Text style={styles.errors}>{errors.mobileNumber}</Text>
                                }
                            </View>
                            <View style={styles.screenFooter}>
                                <View style={styles.footerButton}>
                                    <AppButton title='Next' onPress={handleSubmit} disabled={!isValid}/>
                                </View>
                                <View style={styles.footerText}>
                                    <Text style={styles.footerRegularText}>By signing up, you agree to our <Text style={styles.footerBoldText}>Terms of Service</Text> and acknowledge that you have read our <Text style={styles.footerBoldText}>Privacy Policy</Text>.</Text>
                                </View>
                            </View>
                        </SafeAreaView>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </Formik>
    )
}

export default MobileNumberScreen

const styles = StyleSheet.create({
    mobileNumberContainer: {
        flex: 1,
        backgroundColor: Colors.MistyLavender,
    },
    screenContent: {
        paddingHorizontal: 26,
        flex: 1
    },
    headingsContainer: {
        marginTop: 30,
        marginBottom: 20
    },
    screenHeading: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: Colors.DeepInk,
        marginBottom: 6
    },
    screenSubheading: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.SlateGrey
    },
    screenFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },
    footerButton: {
        marginHorizontal: 26
    },
    footerText: {
        marginHorizontal: 33,
        marginVertical: 20
    },
    footerRegularText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        textAlign: "center",
        color: Colors.StoneGray
    },
    footerBoldText: {
        fontFamily: "Roboto Bold",
        color: Colors.DeepInk
    },
    errors: {
        fontFamily: "Roboto Bold",
        color: Colors.VividRed,
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 4,
    },
})
