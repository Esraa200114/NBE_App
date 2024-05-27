import { Alert, Button, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from '../../../constants/Colors';
import AppButton from '../atoms/AppButton';
import BackLogoHeader from '../organisms/BackLogoHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OtpInput } from 'react-native-otp-entry';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MissionStatusModal from '../molecules/MissionStatusModal';
import { ThemeContext } from '../../context/ThemeContext';

type ConfirmationCodeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "ConfirmationCode">,
    mobileNumber: string,
    title: string
};

const ConfirmationCodeScreen = ({ navigation, mobileNumber, title }: ConfirmationCodeScreenProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [isValidPinCodeLength, setIsValidPinCodeLength] = useState(false);
    const [isTimerOver, setIsTimerOver] = useState(false);
    const [seconds, setSeconds] = useState(59);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
    const [code, setCode] = useState<string>('');

    const handleCloseModal = () => {
        setVisible(false);
        navigation.pop(1);
    };

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        console.log(user);
    }

    const resendCodeHandler = () => {
        if (!confirm) {
            setIsValidPinCodeLength(false);
            setIsTimerOver(false);
            setSeconds(59);
            setError("");
            setCode(""); // Reset code state
            signInWithPhoneNumber(mobileNumber);
        }
    };

    // useEffect(() => {
    //     signInWithPhoneNumber(mobileNumber);
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber;
    // }, []);

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber: string) {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
            Alert.alert('OTP Sent', 'A verification code has been sent to your phone.');
        } catch (error) {
            Alert.alert('OTP Not Sent', 'Failed to send the verification code. Please try again.');
            console.error('Error sending OTP:', error);
        }
    }

    async function confirmCode() {
        try {
            if (confirm) {
                await confirm.confirm(code);
                if (title === "OTP") {
                    setVisible(true);
                } else {
                    navigation.push("Password");
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
            console.error('Invalid code:', error);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 1) {
                    setIsTimerOver(true);
                    clearInterval(timer);
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const mobileNumberDisplayed = mobileNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

    const pinCodeValidationHandler = (pinCodeEntered: string) => {
        if (pinCodeEntered.length === 6 && /^[0-9]{6}$/.test(pinCodeEntered)) {
            setIsValidPinCodeLength(true);
            setCode(pinCodeEntered);
            setError("");
        } else {
            setIsValidPinCodeLength(false);
            setError("PIN code must be exactly 6 digits long");
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[styles.confirmationCodeContainer, { backgroundColor: activeColors.MistyLavender, }]}>
                <StatusBar backgroundColor={activeColors.MistyLavender} barStyle={theme.mode === "dark" ? "light-content" : "dark-content"} />
                <SafeAreaView style={{ flex: 1 }}>
                    <MissionStatusModal
                        title='Mission Complete'
                        body='Transfer to Jasmine Robert was successful'
                        image={require("../../../assets/images/mission-complete.png")}
                        isMissionSuccess={true}
                        onClose={handleCloseModal}
                        visible={visible}
                        buttonTitle='Finish'
                        isTransfer={true}
                    />
                    <View style={styles.screenContent}>
                        <BackLogoHeader navigation={navigation} showNotificationButton={false} />
                        <View style={styles.headingsContainer}>
                            <Text style={[styles.screenHeading, {
                                color: activeColors.DeepInk,
                            }]}>{title}</Text>
                            <Text style={[styles.screenSubheading, {
                                color: activeColors.SlateGrey,
                            }]}>Enter 6 digit code we sent to {mobileNumberDisplayed}</Text>
                        </View>
                        {/* Confirmation code input pins */}
                        <View style={styles.pinCode}>
                            <OtpInput
                                numberOfDigits={6}
                                focusColor={activeColors.ForestGreen}
                                focusStickBlinkingDuration={500}
                                onTextChange={pinCodeValidationHandler}
                                theme={{
                                    pinCodeContainerStyle: {
                                        backgroundColor: activeColors.PureWhite,
                                        borderColor: activeColors.PureWhite,
                                        shadowColor: activeColors.CharcoalGray,
                                        ...styles.pinCodeContainer
                                    },
                                    pinCodeTextStyle: {
                                        color: activeColors.DeepInk,
                                        ...styles.pinCodeText
                                    },
                                    focusedPinCodeContainerStyle: { borderColor: activeColors.ForestGreen },
                                }}
                            />
                            {error && <Text style={[styles.errors, {
                                color: activeColors.VividRed,
                            }]}>{error}</Text>}
                        </View>
                        <View>
                            <Text style={[{
                                ...styles.screenSubheading,
                                color: activeColors.SlateGrey,
                            }, styles.noCodeReceievedText]}>Didn’t receive the code?</Text>
                            {!isTimerOver && (
                                <View style={styles.timerContainer}>
                                    <Text style={[styles.requestCodeText, {
                                        color: activeColors.DeepInk,
                                    }]}>Request new one in 00:{seconds.toString().padStart(2, '0')}</Text>
                                </View>
                            )}
                            {isTimerOver && (
                                <TouchableOpacity onPress={resendCodeHandler}>
                                    <Text style={[styles.resendCodeText, {
                                        color: activeColors.ForestGreen,
                                        textDecorationColor: activeColors.ForestGreen
                                    }]}>Resend code</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View style={styles.screenFooter}>
                        <View style={styles.footerButton}>
                            <AppButton
                                title='Submit'
                                onPress={/*confirmCode*/ () => navigation.push("Password")}
                                disabled={/*!isValidPinCodeLength*/ false}
                                bgColor={activeColors.ForestGreen}
                                titleColor={activeColors.PureWhite}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ConfirmationCodeScreen;

const styles = StyleSheet.create({
    confirmationCodeContainer: {
        flex: 1,
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
        marginBottom: 6
    },
    screenSubheading: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
    },
    pinCode: {
        marginVertical: 20,
    },
    pinCodeContainer: {
        width: 45,
        height: 65,
        borderRadius: 10,
        borderWidth: 1.5,
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
    },
    activePinCodeContainer: {
    },
    errors: {
        fontFamily: "Roboto Bold",
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
    },
    resendCodeText: {
        fontFamily: "Roboto Bold",
        fontSize: 16,
        lineHeight: 18.75,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
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
});
