import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Components
import BeneficiariesButtonsWrapper from './BeneficiariesButtonsWrapper'
import PropBasedIcon from '../atoms/PropBasedIcon'

// Icons
import IoniconsIcon from "react-native-vector-icons/Ionicons"

type AddBeneficiariesButtonProps = {
    textColor: string,
    bgColor: string,
    onPress: () => void
}

const AddBeneficiariesButton = ({ textColor, bgColor, onPress }: AddBeneficiariesButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <BeneficiariesButtonsWrapper style={[styles.addBeneficiariesButtonWrapper, { backgroundColor: bgColor }]}>
                <PropBasedIcon color={textColor} component={IoniconsIcon} name='add-circle-outline' size={20} />
                <Text style={[styles.addBeneficiariesButtonTitle, { color: textColor }]}>Add</Text>
            </BeneficiariesButtonsWrapper>
        </TouchableOpacity>
    )
}

export default AddBeneficiariesButton

const styles = StyleSheet.create({
    addBeneficiariesButtonWrapper: {
        columnGap: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
    },
    addBeneficiariesButtonTitle: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
    }
})