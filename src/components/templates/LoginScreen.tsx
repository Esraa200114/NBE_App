import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import LoginHeader from '../molecules/LoginHeader';
import LoginForm from '../organisms/LoginForm';
import LoginFooter from '../molecules/LoginFooter';
import BackgroundImageContainer from '../organisms/BackgroundImageContainer';

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator';

type LoginScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Login">
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <BackgroundImageContainer image={require("../../../assets/images/login-background.jpg")}>
            <LinearGradient colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)"]} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
                            <View style={[styles.content, styles.container]}>
                                <LoginHeader containsLanguageCard={true} />
                                <View style={styles.container} />
                                <LoginForm navigation={navigation} />
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <LoginFooter />
                </SafeAreaView>
            </LinearGradient>
        </BackgroundImageContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    content: {
        marginHorizontal: 25,
    },
});

export default LoginScreen;
