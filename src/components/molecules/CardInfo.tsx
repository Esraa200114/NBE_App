import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'

type CardInfoProp = {
    title: string,
    value: string
}

const CardInfo = ({ title, value }: CardInfoProp) => {
    return (
        <View style={styles.cardInfoContainer}>
            <Text style={styles.cardInfoTitle}>{title}</Text>
            <Text style={styles.cardInfoValue}>{value}</Text>
        </View>
    )
}

export default CardInfo

const styles = StyleSheet.create({
    cardInfoContainer: {

    },
    cardInfoTitle: {
        fontFamily: "Gemunu Libre Bold",
        fontSize: 14,
        lineHeight: 15.18,
        color: Colors.GrayishSilver
    },
    cardInfoValue: {
        fontFamily: "Gemunu Libre Bold",
        fontSize: 14,
        lineHeight: 15.18,
        color: Colors.PureWhite
    }
})