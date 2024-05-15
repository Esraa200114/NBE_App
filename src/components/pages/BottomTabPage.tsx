import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabsNavigator from '../../navigation/BottomTabsNavigator'

const BottomTabPage = () => {
    return (
        <View style={{ flex: 1 }}>
            <BottomTabsNavigator />
        </View>
    )
}

export default BottomTabPage

const styles = StyleSheet.create({})