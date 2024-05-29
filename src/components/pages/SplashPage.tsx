import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator';

// Colors
import { Colors } from '../../../constants/Colors';

// Screens
import SplashScreen from '../templates/SplashScreen'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

type SplashPageProps = NativeStackScreenProps<RootStackParamList, "Splash">

const SplashPage = ({ navigation }: SplashPageProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={{ ...styles.container, backgroundColor: activeColors.MistyLavender }}>
            <SplashScreen navigation={navigation} />
        </View>
    )
}

export default SplashPage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
