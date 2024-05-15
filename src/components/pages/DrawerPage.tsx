import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from '../../navigation/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const DrawerPage = () => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerNavigator />
        </View>
    )
}

export default DrawerPage

const styles = StyleSheet.create({})