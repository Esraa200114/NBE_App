import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import PropBasedIcon from '../atoms/PropBasedIcon'
import { Colors } from '../../../constants/Colors'
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
        <View style={styles.balanceMenuItemContainer}>
            <View style={[styles.balanceMenuItemContent, { backgroundColor: background }]}>
                <PropBasedIcon size={iconSize} color={iconColor} component={component} name={iconName} />
            </View>
            <Text style={[styles.balanceMenuItemLabel, {color: activeColors.DeepInk}]}>{label}</Text>
        </View>
    )
}

export default BalanceMenuItem

const styles = StyleSheet.create({
    balanceMenuItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6
    },
    balanceMenuItemContent: {
        borderRadius: 13,
        padding: 18, 
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