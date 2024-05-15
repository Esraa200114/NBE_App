import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import FormInputIcon from './IconGenerator'

import { Colors } from '../../../constants/Colors'

const FormCheckbox = () => {

    const [isChecked, setIsChecked] = useState(false)

    const toggleCheckboxState = () => {
        setIsChecked(!isChecked)
    }

    return (
        <TouchableOpacity onPress={toggleCheckboxState} style={styles.formCheckboxContainer}>
            <View style={[styles.formCheckboxCheckIcon, isChecked && styles.checkedCheckbox]}>
                <FormInputIcon type="white-check" />
            </View>
            <Text style={styles.formCheckboxTitle}>Remember me</Text>
        </TouchableOpacity>
    )
}

export default FormCheckbox

const styles = StyleSheet.create({
    formCheckboxContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    formCheckboxCheckIcon: {
        width: 25,
        height: 25,
        borderRadius: 6.25,
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.5)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        alignItems: "center",
        justifyContent: "center",
    },
    formCheckboxTitle: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.PureWhite,
        marginLeft: 10,
    },
    checkedCheckbox: {
        backgroundColor: Colors.ForestGreen,
        borderColor: Colors.ForestGreen
    }
})