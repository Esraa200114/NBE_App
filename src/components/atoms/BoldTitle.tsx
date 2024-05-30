import React from 'react'
import { StyleSheet, Text } from 'react-native'

type BoldTitleProps = {
    title: string,
    color: string
}

const BoldTitle = ({ title, color }: BoldTitleProps) => {
    return (
        <Text style={[styles.Heading, { color: color }]}>
            {title}
        </Text>
    )
}

export default BoldTitle

const styles = StyleSheet.create({
    Heading: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
    },
})