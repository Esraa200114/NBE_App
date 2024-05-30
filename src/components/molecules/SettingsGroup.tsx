import React from 'react'
import { StyleSheet, View } from 'react-native'

// Icons
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import IonicsIcon from "react-native-vector-icons/Ionicons"

// Components
import SettingsItem from '../atoms/SettingsItem'

const SettingsGroup = () => {
    return (
        <View style={styles.settingsGroupContainer}>
            <SettingsItem component={MaterialCommunityIcon} label="Calculators" name="calculator-variant-outline" />
            <SettingsItem component={IonicsIcon} label="Dark Mode" name="moon" />
        </View>
    )
}

export default SettingsGroup

const styles = StyleSheet.create({
    settingsGroupContainer: {
        paddingHorizontal: 10, 
        paddingVertical: 4, 
        borderRadius: 13, 
        rowGap: 3
    }
})