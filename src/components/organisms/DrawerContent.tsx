import React, { useContext } from 'react'
import { View, StatusBar, StyleSheet, } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList } from "@react-navigation/drawer";

// Colors
import { Colors } from '../../../constants/Colors';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

// Components
import SettingsGroup from '../molecules/SettingsGroup';
import DrawerFooter from './DrawerFooter';
import DrawerHeader from './DrawerHeader';

type DrawerContentProps = {
    onConfirm: () => void,
    props: any
}

const DrawerContent = ({ onConfirm, props }: DrawerContentProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View>
            <StatusBar backgroundColor={activeColors.MistyLavender} barStyle={theme.mode === "dark" ? "light-content" : "dark-content"} />
            <SafeAreaView style={styles.container}>
                <View style={styles.drawerContainer}>
                    <DrawerHeader />
                    <View style={styles.drawerContent}>
                        <DrawerItemList {...props} />
                        <SettingsGroup />
                    </View>
                </View>
                <DrawerFooter onConfirm={onConfirm} />
            </SafeAreaView>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    drawerContainer: {
        paddingHorizontal: 10
    },
    drawerContent: {
        marginTop: 26
    },
})
