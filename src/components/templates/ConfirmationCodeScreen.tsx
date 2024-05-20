import { Alert, Button, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../../constants/Colors'
import AppButton from '../atoms/AppButton'
import BackLogoHeader from '../organisms/BackLogoHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthCredential } from 'firebase/auth'
import { RootStackParamList } from '../../navigation/StackNavigator'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MissionCompleteModal from '../molecules/MissionCompleteModal'

type ConfirmationCodeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "ConfirmationCode">,
    mobileNumber: string,
    title: string
}

const ConfirmationCodeScreen = ({ navigation, mobileNumber, title }: ConfirmationCodeScreenProps) => {

    const [isValidPinCodeLength, setIsValidPinCodeLength] = useState(false);
    const [isTimerOver, setIsTimerOver] = useState(false);
    const [seconds, setSeconds] = useState(59)
    const [error, setError] = useState("")

    const [visible, setVisible] = useState(false)

    const handleCloseModal = () => {
        setVisible(false);
        navigation.pop(1)
    }

    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState<string>('');

    // Handle user state changes
    // Handle login
    function onAuthStateChanged(user: any) {
        console.log(user);
    }

    const resendCodeHandler = () => {
        setIsValidPinCodeLength(false)
        setIsTimerOver(false)
        setSeconds(59)
        signInWithPhoneNumber(mobileNumber)
    }

    useEffect(() => {

        signInWithPhoneNumber(mobileNumber)

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

        return subscriber;
    }, []);

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber: string) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            if (confirm) {
                await confirm.confirm(code);
                if (title === "OTP") {
                    setVisible(true)
                } else {
                    navigation.push("Password")
                }
            }
        } catch (error) {
            Alert.alert(
                'Invalid Code',
                'The entered pin code doesn\'t match the one that was sent. Try again!',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
            console.log('Invalid code.');
        }
    }

    let timer: NodeJS.Timeout;

    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds - 1)

            if (seconds === 0) {
                setIsTimerOver(true)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [seconds])

    let mobileNumberDisplayed;

    if (mobileNumber.length === 11) {
        mobileNumberDisplayed = mobileNumber.substring(0, 4) + " " + mobileNumber.substring(4, 7) + " " + mobileNumber.substring(7, 11)
    } else if (mobileNumber.length > 11) {
        mobileNumberDisplayed = mobileNumber.substring(0, 3) + " " + mobileNumber.substring(3, 6) + " " + mobileNumber.substring(6, 9) + " " + mobileNumber.substring(9, 13)
    }

    const pinCodeValidationHandler = (pinCodeEntered: string) => {

        // const numberRegex = /^[0-9]{5}$/;
        // if (pinCodeEntered.length !== 5) {
        //     setError('The pin code must be exactly 5 digits long');
        //     setIsValidPinCode(false)
        // } else if (!numberRegex.test(pinCodeEntered)) {
        //     setError('The pin code must contain numbers only');
        //     setIsValidPinCode(false)
        // } else {
        //     setError("")
        //     // begin validation then set is valid pin code to true
        // }
        if (pinCodeEntered.length !== 6) {
            setIsValidPinCodeLength(false)
        } else {
            setIsValidPinCodeLength(true)
            setCode(pinCodeEntered)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.confirmationCodeContainer}>
                <StatusBar backgroundColor={Colors.MistyLavender} barStyle="dark-content" />
                <SafeAreaView style={{ flex: 1 }}>
                    <MissionCompleteModal visible={visible} onClose={handleCloseModal}/>
                    <View style={styles.screenContent}>
                        <BackLogoHeader navigation={navigation} showNotificationButton={false}/>
                        <View style={styles.headingsContainer}>
                            <Text style={styles.screenHeading}>{title}</Text>
                            <Text style={styles.screenSubheading}>Enter 6 digit code we sent to {mobileNumberDisplayed}</Text>
                        </View>
                        {/* Confirmation code input pins */}
                        <View style={styles.pinCode}>
                            <OtpInput
                                numberOfDigits={6}
                                focusColor={Colors.ForestGreen}
                                focusStickBlinkingDuration={500}
                                onTextChange={pinCodeValidationHandler}
                                theme={{
                                    pinCodeContainerStyle: styles.pinCodeContainer,
                                    pinCodeTextStyle: styles.pinCodeText,
                                    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                                }}
                            />
                            {/* Message
                            {!isValidPinCode && <Text style={styles.errors}>{error}
                            </Text>} */}
                        </View>
                        <View>
                            <Text style={[styles.screenSubheading, styles.noCodeReceievedText]}>Didn’t receive the code?</Text>
                            {!isTimerOver && <View style={styles.timerContainer}>
                                <Text style={styles.requestCodeText}>Request new one in 00:{seconds.toString().length === 1 ? `0${seconds}` : seconds}</Text>
                            </View>}
                            {isTimerOver && <TouchableOpacity onPress={resendCodeHandler}><Text style={styles.resendCodeText}>Resend code</Text></TouchableOpacity>}
                        </View>
                    </View>
                    <View style={styles.screenFooter}>
                        <View style={styles.footerButton}>
                            <AppButton title='Submit' onPress={() => confirmCode()} disabled={false} bgColor={Colors.ForestGreen} titleColor={Colors.PureWhite} />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ConfirmationCodeScreen

const styles = StyleSheet.create({
    confirmationCodeContainer: {
        flex: 1,
        backgroundColor: Colors.MistyLavender,
    },
    screenContent: {
        paddingHorizontal: 26,
        flex: 1
    },
    headingsContainer: {
        marginTop: 30,
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
        color: Colors.SlateGrey,
    },
    pinCode: {
        marginVertical: 20,
        // alignItems: "center",
        // justifyContent: "center",
    },
    pinCodeContainer: {
        backgroundColor: Colors.PureWhite,
        width: 45,
        height: 65,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.PureWhite,
        shadowColor: Colors.CharcoalGray,
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        // For Android
        elevation: 1,
    },
    pinCodeText: {
        fontFamily: "Roboto Bold",
        fontSize: 25,
        lineHeight: 29.3,
        color: Colors.DeepInk,
    },
    activePinCodeContainer: {
        borderColor: Colors.ForestGreen
    },
    errors: {
        fontFamily: "Roboto Bold",
        color: Colors.VividRed,
        fontSize: 14,
        lineHeight: 16.41,
        marginTop: 8,
    },
    noCodeReceievedText: {
        marginBottom: 4,
    },
    timerContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    requestCodeText: {
        fontFamily: "Roboto Bold",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.DeepInk,
    },
    resendCodeText: {
        fontFamily: "Roboto Bold",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.ForestGreen,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: Colors.ForestGreen
    },
    screenFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerButton: {
        marginHorizontal: 26,
        marginVertical: 20
    },
})