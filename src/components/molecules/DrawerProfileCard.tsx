import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropBasedIcon from '../atoms/PropBasedIcon'
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import { Colors } from '../../../constants/Colors'

const DrawerProfileCard = () => {
    return (
        <View style={styles.drawerProfileCardContainer}>
            <View style={styles.drawerProfileCardImageContainer}>
                <Image source={require("../../../assets/images/profile-image.jpg")} resizeMode='contain' style={styles.drawerProfileCardImage} />
            </View>
            <View style={styles.drawerProfileCardInfoContainer}>
                <Text style={styles.drawerProfileCardUserNameText}>Ahmad Sami</Text>
                <Text style={styles.drawerProfileCardMobileNumberText}>+20 101 131 5412</Text>
            </View>
            <View style={styles.drawerProfileCardOptionsContainer}>
                <PropBasedIcon component={SimpleLineIcon} color={Colors.ShadowBlack} name='options-vertical' size={20} />
            </View>
        </View>
    )
}

export default DrawerProfileCard

const styles = StyleSheet.create({
    drawerProfileCardContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.PureWhite,
        borderRadius: 29,
        paddingHorizontal: 12,
        paddingVertical: 18,
        ...Platform.select({
            ios: {
                shadowColor: Colors.MidnightBlack,
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
        color: Colors.ShadowBlack
    },
    drawerProfileCardMobileNumberText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.GunmetalGray
    },
    drawerProfileCardOptionsContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})