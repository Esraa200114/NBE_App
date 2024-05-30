import React, { useContext } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AppCard from '../atoms/AppCard'
import PropBasedIcon from '../atoms/PropBasedIcon'

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FeatherIcon from 'react-native-vector-icons/Feather';

// Contexts
import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'

type TabHeaderProps = {
    onPress: () => void
}

const TabHeader = ({ onPress }: TabHeaderProps) => {

    const { user } = useContext(UserContext);

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={[styles.tabHeaderContainer, styles.rowDirection]}>
            <Pressable onPress={onPress}>
                <PropBasedIcon component={FontAwesome5Icon} color={activeColors.MidnightBlack} name='bars' size={17} />
            </Pressable>
            <View style={[styles.tabHeaderNotificationContainer, styles.rowDirection]}>
                <View style={styles.rowDirection}>
                    <Image source={require("../../../assets/images/profile-image.jpg")} style={styles.profileImage} />
                    <View style={styles.tabHeaderTextContainer}>
                        <Text style={[styles.welcomingText, styles.textStyle, { color: activeColors.MidnightBlack }]}>Good morning</Text>
                        <Text style={[styles.userNameText, styles.textStyle, { color: activeColors.MidnightBlack }]}>{user.userName}</Text>
                    </View>
                </View>
                <AppCard radius={10} child={<View style={{ transform: [{ rotate: '20deg' }] }}><PropBasedIcon component={FeatherIcon} color={activeColors.DeepInk} size={17} name='bell' /></View>} isBgLight={true} />
            </View>
        </View>
    )
}

export default TabHeader

const styles = StyleSheet.create({
    tabHeaderContainer: {
        alignItems: 'center',
        zIndex: 2
    },
    tabHeaderNotificationContainer: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'space-between'
    },
    rowDirection: {
        flexDirection: 'row'
    },
    tabHeaderTextContainer: {
        marginLeft: 10
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    welcomingText: {
        fontFamily: 'Roboto Light',
    },
    userNameText: {
        fontFamily: 'Roboto Bold',
    },
    textStyle: {
        fontSize: 14,
        lineHeight: 16.41,
    }
})