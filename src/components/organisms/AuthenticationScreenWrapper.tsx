import React, { ReactNode, useContext } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Components
import BackLogoHeader from './BackLogoHeader'

type AuthenticationScreenWrapperProps = {
    style?: ViewStyle,
    paddingValue: number,
    children: ReactNode,
    modal?: React.JSX.Element,
    onBack: () => void
}

const AuthenticationScreenWrapper = ({ style, paddingValue, children, modal, onBack }: AuthenticationScreenWrapperProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[style, { backgroundColor: activeColors.MistyLavender }]}>
                        <StatusBar backgroundColor={activeColors.MistyLavender} barStyle={theme.mode === "dark" ? "light-content" : "dark-content"} />
                        <SafeAreaView style={styles.container}>
                            {modal}
                            <View style={[styles.container, { paddingHorizontal: paddingValue }]}>
                                <BackLogoHeader onBack={onBack} showNotificationButton={false} />
                                {children}
                            </View>
                        </SafeAreaView>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AuthenticationScreenWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
})