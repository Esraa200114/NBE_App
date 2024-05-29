import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from '../../navigation/DrawerNavigator'
import { RootStackParamList } from '../../navigation/MainStackNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type DrawerPageProps = NativeStackScreenProps<RootStackParamList, "Drawer">

const DrawerPage = ({ navigation }: DrawerPageProps) => {
    return (
        <View style={styles.rootContainer}>
            <DrawerNavigator navigation={navigation} />
        </View>
    )
}

export default DrawerPage

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    }
})