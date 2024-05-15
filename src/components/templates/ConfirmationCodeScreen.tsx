import { Button, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../../constants/Colors'
import AppButton from '../atoms/AppButton'
import BackLogoHeader from '../organisms/BackLogoHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthCredential } from 'firebase/auth'

type ConfirmationCodeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "ConfirmationCode">,
    mobileNumber: string
}

const ConfirmationCodeScreen = ({ navigation, mobileNumber }: ConfirmationCodeScreenProps) => {

    const [isValidPinCode, setIsValidPinCode] = useState(true);
    const [isTimerOver, setIsTimerOver] = useState(false);
    const [seconds, setSeconds] = useState(59)

    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState<string>('');

    // Handle user state changes
    // Handle login
    function onAuthStateChanged(user: any) {
        console.log(user);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
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
            }
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Button
                        title="Phone Number Sign In"
                        onPress={() => signInWithPhoneNumber(mobileNumber)}
                    />
                </SafeAreaView>

            </View>

        );
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.DeepInk} />
            <View style={{ flex: 1, backgroundColor: Colors.AmberGold }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Text>Hello</Text>
                    <TextInput value={code} onChangeText={text => setCode(text)} />
                    <Button title="Confirm Code" onPress={() => confirmCode()} />
                </SafeAreaView>
            </View>

        </View>
    );
}

export default ConfirmationCodeScreen
