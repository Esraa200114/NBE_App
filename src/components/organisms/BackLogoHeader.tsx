import { Image, StyleSheet } from 'react-native'
import React from 'react'
import PreviousPageButton from '../atoms/PreviousPageButton'
import ScreenHeader from '../molecules/ScreenHeader'

type BackLogoHeaderProps = {
    navigation: any
}

const BackLogoHeader = ({ navigation }: BackLogoHeaderProps) => {
    return (
        <ScreenHeader flexDirection='row'>
            <PreviousPageButton navigation={navigation} />
            <Image source={require("../../../assets/images/screens-logo.png")} />
        </ScreenHeader>
    )
}

export default BackLogoHeader

const styles = StyleSheet.create({})