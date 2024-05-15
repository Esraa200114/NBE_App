import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import AppCard from '../atoms/AppCard'
import PropBasedIcon from '../atoms/PropBasedIcon'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FeatherIcon from 'react-native-vector-icons/Feather';

type TabHeaderProps = {
    onPress: () => void
}

const TabHeader = ({ onPress }: TabHeaderProps) => {
    return (
        <View style={styles.tabHeaderContainer}>
            {/* Header */}
            <Pressable onPress={onPress}>
                <PropBasedIcon component={FontAwesome5Icon} color={Colors.MidnightBlack} name='bars' size={17} />
            </Pressable>
            <View style={styles.tabHeaderNotificationContainer}>
                <View style={styles.tabHeaderProfileContainer}>
                    <Image source={require("../../../assets/images/profile-image.jpg")} style={styles.profileImage} />
                    <View style={styles.tabHeaderTextContainer}>
                        <Text style={styles.welcomingText}>Good morning</Text>
                        <Text style={styles.userNameText}>Ahmad</Text>
                    </View>
                </View>
                {/* Bell */}
                <AppCard radius={10} child={<View style={{ transform: [{ rotate: '20deg' }] }}><PropBasedIcon component={FeatherIcon} color={Colors.DeepInk} size={17} name='bell' /></View>} />
            </View>
        </View>
    )
}

export default TabHeader

const styles = StyleSheet.create({
    tabHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabHeaderNotificationContainer: {
        marginLeft: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    tabHeaderProfileContainer: {
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
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.MidnightBlack
    },
    userNameText: {
        fontFamily: 'Roboto Bold',
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.MidnightBlack
    }
})