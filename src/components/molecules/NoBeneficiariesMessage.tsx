import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AddBeneficiariesButton from './AddBeneficiariesButton'
import { ThemeContext } from '../../context/ThemeContext'

type NoBeneficiariesMessageProps = {
    openForm: () => void
}

const NoBeneficiariesMessage = ({ openForm }: NoBeneficiariesMessageProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={styles.noBeneficiariesMessageContent}>
            <Image source={require("../../../assets/images/no-beneficiaries.png")} style={styles.noBeneficiariesMessageImage} />
            <Text style={[styles.noBeneficiariesMessageTitle, { color: activeColors.MidnightGray }]}>No Beneficiaries</Text>
            <Text style={[styles.noBeneficiariesMessageBody, {
                color: activeColors.DeepAmethyst
            }]}>You don’t have beneficiaries, add some so you can send money</Text>
            <AddBeneficiariesButton bgColor={activeColors.ForestGreen} textColor={activeColors.PureWhite} onPress={openForm} />
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
    },
    noBeneficiariesMessageBody: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        textAlign: "center",
        marginTop: 6,
        marginBottom: 14,
        marginHorizontal: 58,
    },
})