import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import TabHeader from '../organisms/TabHeader';
import ATMsMap from '../organisms/ATMsMap';

// Navigation
import { DrawerActions, useNavigation } from '@react-navigation/native';

const ATMsScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.screenContainer}>
            <StatusBar translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.screenContent}>
                <View style={styles.screenHeader}>
                    <TabHeader onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                </View>
                <ATMsMap />
            </SafeAreaView>
        </View>
    )
}

export default ATMsScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    screenContent: {
        paddingHorizontal: 25,
        paddingVertical: 16,
        flex: 1
    },
    screenHeader: {
        position: "relative",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2
    }
});
