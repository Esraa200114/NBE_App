import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

type BeneficiariesButtonsWrapperProps = {
    children: ReactNode,
    style: {}
}

const BeneficiariesButtonsWrapper = ({ children , style}: BeneficiariesButtonsWrapperProps) => {
    return (
        <View style={[styles.beneficiariesButtonsWrapperContainer, style]}>{children}</View>
    )
}

export default BeneficiariesButtonsWrapper

const styles = StyleSheet.create({
    beneficiariesButtonsWrapperContainer: {
        flexDirection: "row",
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 2,
        borderRadius: 15,
        height: 30,
        paddingHorizontal: 4,
    }
})