import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useContext } from 'react'
import PropBasedIcon from '../atoms/PropBasedIcon'
import { Colors } from '../../../constants/Colors'
import ThemeSwitch from '../atoms/ThemeSwitch'
import { ThemeContext } from '../../context/ThemeContext'

type DrawerItemProps = {
    component: React.ComponentType<any>,
    name: string,
    label: string,
    focused: boolean
}

const DrawerItem = ({ component, name, label, focused }: DrawerItemProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={styles.drawerItemContainer}>
            <View style={styles.drawerItemContent}>
                <View style={[styles.drawerItemIconContainer, { backgroundColor: focused ? activeColors.TranslucentWhite : label === "Log Out" ? activeColors.RubyMist : activeColors.ShadowVeil }]}>
                    <PropBasedIcon component={component} color={focused ? activeColors.PureWhite : label === "Log Out" ? activeColors.CrimsonRed : activeColors.ShadowBlack} name={name} size={15} />
                </View>
                <Text style={[styles.drawerItemLabel, { color: focused ? activeColors.PureWhite : label === "Log Out" ? activeColors.CrimsonRed : activeColors.ShadowBlack }]}>{label}</Text>
            </View>
            {label === "Dark Mode" && <ThemeSwitch />}
        </View>
    )
}

export default DrawerItem

const styles = StyleSheet.create({
    drawerItemContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    drawerItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerItemIconContainer: {
        borderRadius: 13,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerItemLabel: {
        fontFamily: "Roboto Medium",
        fontSize: 18,
        lineHeight: 21.09,
        marginLeft: 10
    }
})