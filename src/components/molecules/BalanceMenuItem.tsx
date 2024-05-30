import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
import PropBasedIcon from '../atoms/PropBasedIcon'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type BalanceMenuItemProp = {
    background: string,
    label: string,
    iconSize: number,
    iconColor: string,
    component: React.ComponentType<any>,
    iconName: string
}

const BalanceMenuItem = ({ background, label, iconSize, iconColor, component, iconName }: BalanceMenuItemProp) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={[styles.balanceMenuItemContainer, styles.centeredContent]}>
            <View style={[styles.balanceMenuItemContent, styles.centeredContent, { backgroundColor: background }]}>
                <PropBasedIcon size={iconSize} color={iconColor} component={component} name={iconName} />
            </View>
            <Text style={[styles.balanceMenuItemLabel, { color: activeColors.DeepInk }]}>{label}</Text>
        </View>
    )
}

export default BalanceMenuItem

const styles = StyleSheet.create({
    balanceMenuItemContainer: {
        margin: 6
    },
    balanceMenuItemContent: {
        borderRadius: 13,
        padding: 18,
    },
    centeredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    balanceMenuItemLabel: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        textAlign: "center",
        marginTop: 6,
    }
})