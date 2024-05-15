import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScreenHeader from '../molecules/ScreenHeader';
import LoginFooter from '../molecules/LoginFooter';
import LoginForm from '../organisms/LoginForm';
import { Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppCard from '../atoms/AppCard';
import { Colors } from '../../../constants/Colors';
import { RootStackParamList } from '../../navigation/StackNavigator';

type LoginScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Login">
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
    return (
        <View style={styles.loginContainer}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={require("../../../assets/images/login-background.jpg")} resizeMode='cover' style={styles.loginContainer}>
                <LinearGradient colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)"]} style={styles.loginContainer}>
                    <SafeAreaView style={styles.loginContent}>

                        {/* KeyboardAvoidingView is a component provided by React Native that helps ensure that views automatically adjust their position when the keyboard is displayed. This adjustment is particularly useful to prevent the keyboard from covering important UI elements, such as input fields, buttons, or in your case, the footer. */}
                        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>

                            {/* keyboardShouldPersistTaps="handled" ensures that clicks/taps outside any input will close the keyboard if it's open. */}
                            <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
                                {/* Flex container for header and form */}
                                <View style={styles.flexContainer}>
                                    {/* Header */}
                                    <ScreenHeader flexDirection={'row'}>
                                        <AppCard radius={10} child={<Text style={styles.languageCardText}>AR</Text>} />
                                        {/* <LanguageCard radius={10}/> */}
                                        <Image source={require("../../../assets/images/login-logo.png")} />
                                    </ScreenHeader>
                                    {/* Spacing */}
                                    <View style={styles.spacing} />
                                    {/* Form */}
                                    <LoginForm navigation={navigation} />
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                        {/* Footer */}
                        <LoginFooter />
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    loginContent: {
        flex: 1,
    },
    flexContainer: {
        flex: 1,
        marginHorizontal: 25,
    },
    languageCardText: {
        color: Colors.ForestGreen,
        lineHeight: 18.75,
        fontSize: 16,
        fontFamily: "Roboto Bold"
    },
    spacing: {
        flex: 1,
    },
});

export default LoginScreen;
