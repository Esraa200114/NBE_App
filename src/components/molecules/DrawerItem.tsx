import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import PropBasedIcon from '../atoms/PropBasedIcon'
import { Colors } from '../../../constants/Colors'
import ThemeSwitch from '../atoms/ThemeSwitch'

type DrawerItemProps = {
    component: React.ComponentType<any>,
    name: string,
    label: string,
    focused: boolean
}

const DrawerItem = ({ component, name, label, focused }: DrawerItemProps) => {

    return (
        <View style={styles.drawerItemContainer}>
            <View style={styles.drawerItemContent}>
                <View style={[styles.drawerItemIconContainer, { backgroundColor: focused ? "rgba(255, 255, 255, 0.2)" : label === "Log Out" ? "rgba(225, 7, 33, 0.2)" : "rgba(27, 27, 27, 0.2)" }]}>
                    <PropBasedIcon component={component} color={focused ? Colors.PureWhite : label === "Log Out" ? Colors.CrimsonRed : Colors.ShadowBlack} name={name} size={15} />
                </View>
                <Text style={[styles.drawerItemLabel, { color: focused ? Colors.PureWhite : label === "Log Out" ? Colors.CrimsonRed : Colors.ShadowBlack }]}>{label}</Text>
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