import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Components
import PropBasedIcon from './PropBasedIcon'

// Icons
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

type FormCheckboxProps = {
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const FormCheckbox = ({checked, setChecked}: FormCheckboxProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const toggleCheckboxState = () => {
        setChecked(!checked)
    }

    return (
        <TouchableOpacity onPress={toggleCheckboxState} style={styles.formCheckboxContainer}>
            <View style={[styles.formCheckboxCheckIcon, checked && styles.checkedCheckbox]}>
                <PropBasedIcon component={FontAwesomeIcon} color={checked ? activeColors.PureWhite : Colors.light.PureWhite} name='check' size={12} />
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
        color: Colors.light.PureWhite,
        marginLeft: 10,
    },
    checkedCheckbox: {
        backgroundColor: Colors.light.ForestGreen,
        borderColor: Colors.light.ForestGreen
    }
})