import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type BoldTitleProps ={
    title: string,
    color: string
}

const BoldTitle = ({title, color}: BoldTitleProps) => {
    return (
        <Text style={[styles.beneficiariesListHeading, { color: color }]}>
            {title}
        </Text>
    )
}

export default BoldTitle

const styles = StyleSheet.create({
    beneficiariesListHeading: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
    },
})