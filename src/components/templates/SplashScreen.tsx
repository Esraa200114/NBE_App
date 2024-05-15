import React, { useEffect } from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Splash">
}

const SplashScreen = ({ navigation }: SplashScreenProps) => {

    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };

    }, [navigation]);

    return (
        <View style={styles.splashScreenContainer}>
            <StatusBar
                backgroundColor={Colors.MistyLavender} translucent
            />
            <ImageBackground source={require("../../../assets/images/launch_screen.png")} resizeMode='contain' style={styles.splashScreenImage} />
        </View>

    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    splashScreenContainer: {
        flex: 1,
        backgroundColor: Colors.MistyLavender
    },
    splashScreenImage: {
        flex: 1,
        backgroundColor: "#F1F3FB"
    }
});
