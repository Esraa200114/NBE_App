import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Colors
import { Colors } from '../../../constants/Colors'

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

// Componnets
import PropBasedIcon from './PropBasedIcon'

type BadgeIconProps = {
    focused: boolean
}

const BadgeIcon = ({ focused }: BadgeIconProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={[styles.tabBarBadge, { backgroundColor: focused ? activeColors.AmberGold : activeColors.PaleGray, borderColor: focused ? activeColors.AmberGold : activeColors.PureWhite }]}>
            <PropBasedIcon component={FontAwesome5Icon} color={focused ? activeColors.PureWhite : activeColors.MediumGray} size={10.64} name='fingerprint' />
        </View>
    )
}

export default BadgeIcon

const styles = StyleSheet.create({
    tabBarBadge: {
        borderRadius: 6,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 19,
        height: 19,
        position: 'absolute',
        zIndex: 1,
        left: -2,
        top: -2
    },
})