import React from 'react'
import { StyleSheet, View } from 'react-native'

// Components
import DrawerProfileCard from '../molecules/DrawerProfileCard'
import LogOutItem from '../molecules/LogOutItem'
import AbsoluteBottomWrapper from './AbsoluteBottomWrapper'

type DrawerFooterProps = {
    onConfirm: () => void,
}

const DrawerFooter = ({ onConfirm }: DrawerFooterProps) => {
    return (
        <AbsoluteBottomWrapper style={styles.drawerFooter}>
            <LogOutItem onConfirm={onConfirm} />
            <View style={styles.profileCardContainer}>
                <DrawerProfileCard />
            </View>
        </AbsoluteBottomWrapper>
    )
}

export default DrawerFooter

const styles = StyleSheet.create({
    drawerFooter: {
        marginVertical: 17,
    },
    profileCardContainer: {
        marginHorizontal: 17
    }
})