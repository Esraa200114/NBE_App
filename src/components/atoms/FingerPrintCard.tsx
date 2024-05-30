import React from 'react'
import { StyleSheet, View} from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import PropBasedIcon from './PropBasedIcon'

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type FingerprintProps = {
    size: number,
    radius: number,
    padding: number
}

const FingerPrintCard = ({ size, radius, padding }: FingerprintProps) => {
    return (
        <View style={[styles.fingerprintCardContainer, {borderRadius: radius, padding: padding}]}>
            <PropBasedIcon component={FontAwesome5Icon} color={Colors.AmberGold} size={size} name='fingerprint' />
        </View>
    )
}

export default FingerPrintCard

const styles = StyleSheet.create({
    fingerprintCardContainer: {
        borderWidth: 1.5,
        borderColor: Colors.AmberGold,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
    }
})