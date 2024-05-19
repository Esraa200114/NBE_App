import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AddBeneficiariesButton from './AddBeneficiariesButton'

const NoBeneficiariesMessage = () => {
    return (
        <View style={styles.noBeneficiariesMessageContent}>
            <Image source={require("../../../assets/images/no-beneficiaries.png")} style={styles.noBeneficiariesMessageImage} />
            <Text style={styles.noBeneficiariesMessageTitle}>No Beneficiaries</Text>
            <Text style={styles.noBeneficiariesMessageBody}>You don’t have beneficiaries, add some so you can send money</Text>
            <AddBeneficiariesButton bgColor={Colors.ForestGreen} textColor={Colors.PureWhite} />
        </View>
    )
}

export default NoBeneficiariesMessage

const styles = StyleSheet.create({
    noBeneficiariesMessageContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    noBeneficiariesMessageImage: {
        marginVertical: 16
    },
    noBeneficiariesMessageTitle: {
        fontFamily: "Roboto Medium",
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: "center",
        color: Colors.MidnightGray
    },
    noBeneficiariesMessageBody: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        textAlign: "center",
        marginTop: 6,
        marginBottom: 14,
        marginHorizontal: 58,
        color: Colors.DeepAmethyst
    },
})