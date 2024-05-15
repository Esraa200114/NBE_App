import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'
import AppButton from '../atoms/AppButton'

type SuccessScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Success">
}

const SuccessScreen = ({ navigation }: SuccessScreenProps) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground source={require("../../../assets/images/success-background.png")} resizeMode='cover' style={{ flex: 1 }}>
                <SafeAreaView style={styles.screenContainer}>
                    <View style={{ alignItems: "flex-end" }}>
                        <Image source={require("../../../assets/images/login-logo.png")} />
                    </View>
                    <View style={styles.headingsContainer}>
                        <Text style={styles.screenHeading}>Congratulations</Text>
                        <Text style={styles.screenSubheading}>You have successfully registered in NBE online banking service</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppButton title='Finish' onPress={() => { navigation.pop(4) }} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 25,
    },
    headingsContainer: {
        marginTop: 30,
    },
    screenHeading: {
        fontFamily: "Roboto Bold",
        fontSize: 30,
        lineHeight: 35.16,
        color: Colors.PearlGray,
        marginBottom: 6
    },
    screenSubheading: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color: Colors.PearlGray,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginVertical: 20,
        marginHorizontal: 26,
        // For Android
        elevation: 6,
        // For iOS
        shadowColor: '#00723652',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.24,
        shadowRadius: 24,
    }
})
