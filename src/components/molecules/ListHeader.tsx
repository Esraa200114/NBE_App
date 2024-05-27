import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../../../constants/Colors'
import { ThemeContext } from '../../context/ThemeContext'

type ListHeaderProps = {
    title: string
}

const ListHeader = ({title}: ListHeaderProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]
    
    return (
        <View style={styles.listHeaderContainer}>
            <Text style={[styles.listHeaderTitle, {color: activeColors.DeepInk}]}>{title}</Text>
            <Text style={[styles.viewAllText, {color: activeColors.StoneGray}]}>View All</Text>
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
    },
    viewAllText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
    },
})