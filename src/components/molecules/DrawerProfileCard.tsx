import React, { useContext } from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'

// Components
import PropBasedIcon from '../atoms/PropBasedIcon'

// Icons
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"

// Colors
import { Colors } from '../../../constants/Colors'

// Contexts
import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'

const DrawerProfileCard = () => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const { user } = useContext(UserContext)

    return (
        <View style={[styles.drawerProfileCardContainer, {
            backgroundColor: activeColors.PureWhite,
            shadowColor: activeColors.MidnightBlack,

        }]}>
            <View style={styles.drawerProfileCardImageContainer}>
                <Image source={require("../../../assets/images/profile-image.jpg")} resizeMode='contain' style={styles.drawerProfileCardImage} />
            </View>
            <View style={styles.drawerProfileCardInfoContainer}>
                <Text style={[styles.drawerProfileCardUserNameText, {
                    color: activeColors.ShadowBlack
                }]}>{user.userName}</Text>
                <Text style={[styles.drawerProfileCardMobileNumberText, {
                    color: activeColors.GunmetalGray
                }]}>{user.mobileNumber}</Text>
            </View>
            <View style={styles.drawerProfileCardOptionsContainer}>
                <PropBasedIcon component={SimpleLineIcon} color={activeColors.ShadowBlack} name='options-vertical' size={20} />
            </View>
        </View>
    )
}

export default DrawerProfileCard

const styles = StyleSheet.create({
    drawerProfileCardContainer: {
        flexDirection: 'row',
        borderRadius: 29,
        paddingHorizontal: 12,
        paddingVertical: 18,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    drawerProfileCardImageContainer: {
        width: 50,
        height: 50,
    },
    drawerProfileCardImage: {
        width: "100%",
        height: "100%",
        borderRadius: 12
    },
    drawerProfileCardInfoContainer: {
        alignItems: "flex-start",
        justifyContent: 'center',
        rowGap: 4,
        marginHorizontal: 10,
        flex: 1
    },
    drawerProfileCardUserNameText: {
        fontFamily: "Roboto Medium",
        fontSize: 18,
        lineHeight: 21.09,
    },
    drawerProfileCardMobileNumberText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
    },
    drawerProfileCardOptionsContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})