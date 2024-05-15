import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { Colors } from '../../../constants/Colors'
import IconGenerator from './IconGenerator'
import PropBasedIcon from './PropBasedIcon'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type FingerprintProps = {
    size: number,
    radius: number,
    padding: number
}

const FingerPrintCard = ({ size, radius, padding }: FingerprintProps) => {
    return (
        <View style={[styles.fingerprintCardContainer, {borderRadius: radius, padding: padding}]}>
            {/* <Image source={require("../../../assets/images/fingerprint.png")} /> */}
            {/* <IconGenerator type='fingerprint' /> */}
            <PropBasedIcon component={FontAwesome5Icon} color={Colors.AmberGold} size={size} name='fingerprint' />
        </View>
    )
}

export default FingerPrintCard

const styles = StyleSheet.create({
    fingerprintCardContainer: {
        // width: 50,
        // height: 50,
        borderWidth: 1.5,
        borderColor: Colors.AmberGold,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
    }
})