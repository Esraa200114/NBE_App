import React from 'react'
import { View, StyleSheet } from 'react-native'

// Navigation
import BottomTabsNavigator from '../../navigation/BottomTabsNavigator'

const BottomTabPage = () => {
    return (
        <View style={styles.rootContainer}>
            <BottomTabsNavigator />
        </View>
    )
}

export default BottomTabPage

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1
    }
})