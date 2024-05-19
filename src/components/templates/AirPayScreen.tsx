import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import TabHeader from '../organisms/TabHeader'
import CreditCardList from '../organisms/CreditCardList'
import { ScrollView } from 'react-native-gesture-handler'
import AppButton from '../atoms/AppButton'
import FingerPrintCard from '../atoms/FingerPrintCard'

const AirPayScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: Colors.MistyLavender, flex: 1 }}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle="dark-content" />
            <SafeAreaView style={styles.airPayContainer}>
                <TabHeader onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                <ScrollView>
                    <CreditCardList onCardPress={() => { }} />
                    <View style={styles.dragDropContainer}>
                        <Text style={styles.dragDropText}>Touch & hold a card then drag it to this box</Text>
                    </View>
                    <View style={styles.payNowButtonContainer}>
                        <AppButton disabled={false} onPress={() => { }} title='Pay Now' bgColor={Colors.ForestGreen} titleColor={Colors.PureWhite}/>
                        <View style={{position: "absolute", right: 10, bottom: 10, top: 10}}>
                            <FingerPrintCard size={17.92} radius={8} padding={4} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >
    )
}

export default AirPayScreen

const styles = StyleSheet.create({
    airPayContainer: {
        paddingHorizontal: 26,
        paddingVertical: 16,
        flex: 1
    },
    dragDropContainer: {
        width: "100%",
        height: 216,
        borderRadius: 27,
        borderColor: Colors.ForestGreen,
        borderWidth: 2,
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        marginBottom: 60
    },
    dragDropText: {
        fontFamily: "Roboto Medium",
        fontSize: 20,
        lineHeight: 23.44,
        textAlign: "center",
        color: "rgba(0, 114, 54, 0.77)",
        marginHorizontal: 25
    },
    payNowButtonContainer: {
        flexDirection: "row",
    }
})