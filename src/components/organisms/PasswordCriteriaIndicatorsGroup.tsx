import React from 'react'
import { StyleSheet, View } from 'react-native'

// Components
import PasswordCriteriaIndicator from '../molecules/PasswordCriteriaIndicator'

type PasswordCriteriaIndicatorsGroupProps = {
    containsLowerCase: boolean,
    containsUpperCase: boolean,
    isLengthValid: boolean,
    containsNumber: boolean,
    containsSymbol: boolean
}

const PasswordCriteriaIndicatorsGroup = ({ containsLowerCase, containsUpperCase, isLengthValid, containsNumber, containsSymbol }: PasswordCriteriaIndicatorsGroupProps) => {
    return (
        <View style={styles.passwordCriteriaContainer}>
            <PasswordCriteriaIndicator text='Lower case letter' flag={containsLowerCase} />
            <PasswordCriteriaIndicator text='Upper case letter' flag={containsUpperCase} />
            <PasswordCriteriaIndicator text='Minimum 8 characters' flag={isLengthValid} />
            <PasswordCriteriaIndicator text='Number' flag={containsNumber} />
            <PasswordCriteriaIndicator text='Special character' flag={containsSymbol} />
        </View>
    )
}

export default PasswordCriteriaIndicatorsGroup

const styles = StyleSheet.create({
    passwordCriteriaContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
})