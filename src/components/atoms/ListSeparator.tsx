import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'

const ListSeparator = () => {
    return (
        <View style={styles.listSeparator} />
    )
}

export default ListSeparator

const styles = StyleSheet.create({
    listSeparator: {
        backgroundColor: Colors.SlateGrey,
        shadowColor: Colors.SlateGrey,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.45,
        shadowRadius: 1,
        elevation: 1,
        height: 0.3,
        width: '100%',
    }
})