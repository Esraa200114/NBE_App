import React from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'

type ScreenHeadingsProp = {
    heading: string,
    subHeading: string,
    headingColor: string,
    headingStyle?: TextStyle,
    subHeadingColor: string
}

const ScreenHeadings = ({ heading, subHeading, headingColor, headingStyle, subHeadingColor }: ScreenHeadingsProp) => {
    return (
        <View style={styles.headingsContainer}>
            <Text style={[styles.screenHeading, { color: headingColor }, headingStyle]}>{heading}</Text>
            <Text style={[styles.screenSubheading, { color: subHeadingColor }]}>{subHeading}</Text>
        </View>
    )
}

export default ScreenHeadings

const styles = StyleSheet.create({
    headingsContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
    screenHeading: {
        fontFamily: "Roboto Bold",
        marginBottom: 6
    },
    screenSubheading: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
    },
})