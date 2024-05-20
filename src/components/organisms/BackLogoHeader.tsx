import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import PreviousPageButton from '../atoms/PreviousPageButton'
import ScreenHeader from '../molecules/ScreenHeader'
import AppCard from '../atoms/AppCard'
import { Colors } from '../../../constants/Colors'
import PropBasedIcon from '../atoms/PropBasedIcon'
import FeatherIcon from "react-native-vector-icons/Feather"

type BackLogoHeaderProps = {
    navigation: any,
    showNotificationButton: boolean
}

const BackLogoHeader = ({ navigation, showNotificationButton }: BackLogoHeaderProps) => {
    return (
        <ScreenHeader flexDirection='row'>
            <View style={styles.headerButtonsContainer}>
                <PreviousPageButton navigation={navigation} />
                {showNotificationButton && <AppCard radius={10} child={<View style={{ transform: [{ rotate: '20deg' }] }}><PropBasedIcon component={FeatherIcon} color={Colors.DeepInk} size={17} name='bell' /></View>} isBgLight={false} />}
            </View>
            <Image source={require("../../../assets/images/screens-logo.png")} />
        </ScreenHeader>
    )
}

export default BackLogoHeader

const styles = StyleSheet.create({
    headerButtonsContainer: {
        columnGap: 8, 
        flexDirection: "row"
    }
})