import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import ThemeSwitch from '../atoms/ThemeSwitch'
import PropBasedIcon from '../atoms/PropBasedIcon'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'
import LoginActionsContainer from './LoginActionsContainer'

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
        <LoginActionsContainer style={styles.drawerItemContainer}>
            <LoginActionsContainer>
                <View style={[styles.drawerItemIconContainer, { backgroundColor: focused ? activeColors.TranslucentWhite : label === "Log Out" ? activeColors.RubyMist : activeColors.ShadowVeil }]}>
                    <PropBasedIcon component={component} color={focused ? activeColors.PureWhite : label === "Log Out" ? activeColors.CrimsonRed : activeColors.ShadowBlack} name={name} size={15} />
                </View>
                <Text style={[styles.drawerItemLabel, { color: focused ? activeColors.PureWhite : label === "Log Out" ? activeColors.CrimsonRed : activeColors.ShadowBlack }]}>{label}</Text>
            </LoginActionsContainer>
            {label === "Dark Mode" && <ThemeSwitch />}
        </LoginActionsContainer>
    )
}

export default DrawerItem

const styles = StyleSheet.create({
    drawerItemContainer: {
        width: "100%",
        justifyContent: 'space-between',
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