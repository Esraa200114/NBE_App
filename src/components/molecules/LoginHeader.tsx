import React, { useContext } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

// Components
import ScreenHeader from './ScreenHeader'
import AppCard from '../atoms/AppCard'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Colors
import { Colors } from '../../../constants/Colors'

type LoginHeaderProps = {
    containsLanguageCard: boolean
}
const LoginHeader = ({ containsLanguageCard }: LoginHeaderProps) => {

    const { theme } = useContext(ThemeContext);
    const activeColors = (Colors as any)[theme.mode];

    return (
        <ScreenHeader flexDirection={'row'}>
            <View style={styles.languageCardContainer}>
                {containsLanguageCard && <AppCard radius={10} child={<Text style={[styles.languageCardText, { color: activeColors.ForestGreen }]}>AR</Text>} isBgLight={true} />}
            </View>
            <Image source={require("../../../assets/images/login-logo.png")} />
        </ScreenHeader>
    )
}

export default LoginHeader

const styles = StyleSheet.create({
    languageCardContainer: {
        height: 40, 
        width: 40
    },
    languageCardText: {
        lineHeight: 18.75,
        fontSize: 16,
        fontFamily: "Roboto Bold"
    },
})