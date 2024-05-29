import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AppButton from '../atoms/AppButton'
import BackgroundImageContainer from '../organisms/BackgroundImageContainer'
import LoginHeader from '../molecules/LoginHeader'
import ScreenHeadings from '../molecules/ScreenHeadings'
import AbsoluteBottomWrapper from '../organisms/AbsoluteBottomWrapper'

// Navigation
import { RootStackParamList } from '../../navigation/MainStackNavigator'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type SuccessScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Success">
}

const SuccessScreen = ({ navigation }: SuccessScreenProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <BackgroundImageContainer image={require("../../../assets/images/success-background.png")}>
            <SafeAreaView style={styles.screenContainer}>
                <LoginHeader containsLanguageCard={false} />
                <ScreenHeadings heading='Congratulations' headingColor={Colors.PearlGray} headingStyle={styles.heading} subHeading='You have successfully registered in NBE online banking service' subHeadingColor={Colors.PearlGray} />
                <AbsoluteBottomWrapper style={styles.buttonContainer}>
                    <AppButton disabled={false} title='Finish' onPress={() => { navigation.pop(4) }} bgColor={activeColors.PureWhite} titleColor={activeColors.ForestGreen} />
                </AbsoluteBottomWrapper>
            </SafeAreaView>
        </BackgroundImageContainer>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 25,
    },
    heading: {
        fontSize: 30,
        lineHeight: 35.16
    },
    buttonContainer: {
        paddingVertical: 20,
        paddingHorizontal: 26,
        elevation: 6,
        shadowColor: '#00723652',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.24,
        shadowRadius: 24,
    }
})
