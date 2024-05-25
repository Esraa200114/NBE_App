import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from '../../navigation/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { RootStackParamList } from '../../navigation/StackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type DrawerPageProps = NativeStackScreenProps<RootStackParamList, "Drawer">

const DrawerPage = ({ navigation }: DrawerPageProps) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerNavigator navigation={navigation}/>
        </View>
    )
}

export default DrawerPage

const styles = StyleSheet.create({})