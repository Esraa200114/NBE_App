import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

type CardInfoProp = {
    title: string,
    value: string
}

const CardInfo = ({ title, value }: CardInfoProp) => {
    return (
        <View>
            <Text style={[styles.cardInfoTitle, styles.textStyle]}>{title}</Text>
            <Text style={[styles.cardInfoValue, styles.textStyle]}>{value}</Text>
        </View>
    )
}

export default CardInfo

const styles = StyleSheet.create({
    cardInfoTitle: {
        fontFamily: "Gemunu Libre Bold",
        color: Colors.GrayishSilver
    },
    cardInfoValue: {
        fontFamily: "Gemunu Libre Bold",
        color: Colors.PureWhite
    },
    textStyle: {
        fontSize: 14,
        lineHeight: 15.18,
    }
})