import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// Components
import ScreenHeader from '../molecules/ScreenHeader'
import AppCard from '../atoms/AppCard'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Colors
import { Colors } from '../../../constants/Colors'

const DrawerHeader = () => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={styles.drawerHeader}>
            <ScreenHeader flexDirection={'row-reverse'}>
                <AppCard radius={10} child={<Text style={[styles.languageCardText, { color: activeColors.ForestGreen }]}>AR</Text>} isBgLight={true} />
                <Image source={require("../../../assets/images/screens-logo.png")} />
            </ScreenHeader>
        </View>
    )
}

export default DrawerHeader

const styles = StyleSheet.create({
    drawerHeader: {
        marginHorizontal: 20
    },
    languageCardText: {
        lineHeight: 18.75,
        fontSize: 16,
        fontFamily: "Roboto Bold"
    },
})