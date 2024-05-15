import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'

type ListHeaderProps = {
    title: string
}

const ListHeader = ({title}: ListHeaderProps) => {
    return (
        <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeaderTitle}>{title}</Text>
            <Text style={styles.viewAllText}>View All</Text>
        </View>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    listHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listHeaderTitle: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23,
        color: Colors.DeepInk
    },
    viewAllText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
    },
})