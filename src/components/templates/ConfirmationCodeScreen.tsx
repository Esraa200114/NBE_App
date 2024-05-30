import React, { useContext, useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Colors
import { Colors } from '../../../constants/Colors';

// Components
import AppButton from '../atoms/AppButton';
import MissionStatusModal from '../molecules/MissionStatusModal';
import PinCodeInput from '../atoms/PinCodeInput';
import ScreenHeadings from '../molecules/ScreenHeadings';
import ErrorMessage from '../atoms/ErrorMessage';
import ResendCodePrompt from '../molecules/ResendCodePrompt';
import AbsoluteBottomWrapper from '../organisms/AbsoluteBottomWrapper';
import AuthenticationScreenWrapper from '../organisms/AuthenticationScreenWrapper';

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator';

// Contexts
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

type ConfirmationCodeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "ConfirmationCode">,
    mobileNumber: string,
    title: string
};

const ConfirmationCodeScreen = ({ navigation, mobileNumber, title }: ConfirmationCodeScreenProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const { user, setUser } = useContext(UserContext)

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

    function onAuthStateChanged(user: any) {
        console.log(user);
    }

    const resendCodeHandler = () => {
        if (!confirm) {
            setIsValidPinCodeLength(false);
            setIsTimerOver(false);
            setSeconds(59);
            setError("");
            setCode("");
            signInWithPhoneNumber(mobileNumber);
        }
    };

    useEffect(() => {
        signInWithPhoneNumber(mobileNumber);
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

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
                    setUser({ mobileNumber: mobileNumber, userName: user.userName })
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
        <AuthenticationScreenWrapper
            modal={
                <MissionStatusModal
                    title='Mission Complete'
                    body='Transfer to Jasmine Robert was successful'
                    image={theme.mode === "dark" ? require("../../../assets/images/dark-mission-complete.png") : require("../../../assets/images/mission-complete.png")}
                    isMissionSuccess={true}
                    onClose={handleCloseModal}
                    visible={visible}
                    buttonTitle='Finish'
                    isTransfer={true} />
            }
            paddingValue={25}
            style={styles.rootContainer}
            onBack={() => navigation.pop(1)}>

            <ScreenHeadings heading={title} subHeading={`Enter 6 digit code we sent to ${mobileNumberDisplayed}`} headingColor={activeColors.DeepInk} headingStyle={styles.heading} subHeadingColor={activeColors.SlateGrey} />

            <View style={styles.pinCodeContainer}>
                <PinCodeInput onTextChange={pinCodeValidationHandler} />
                {error && <ErrorMessage message={error} />}
            </View>

            <ResendCodePrompt activeColors={activeColors} isTimerOver={isTimerOver} resendCodeHandler={resendCodeHandler} seconds={seconds} />

            <AbsoluteBottomWrapper style={styles.footerButton}>
                <AppButton
                    title='Submit'
                    onPress={confirmCode}
                    disabled={!isValidPinCodeLength}
                    bgColor={activeColors.ForestGreen}
                    titleColor={activeColors.PureWhite}
                />
            </AbsoluteBottomWrapper>
        </AuthenticationScreenWrapper>
    );
};

export default ConfirmationCodeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    heading: {
        fontSize: 20,
        lineHeight: 23.44
    },
    pinCodeContainer: {
        marginBottom: 20,
    },
    footerButton: {
        paddingHorizontal: 26,
        paddingVertical: 20
    },
});
