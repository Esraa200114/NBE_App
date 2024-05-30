import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Components
import PropBasedIcon from '../atoms/PropBasedIcon'
import LoginActionsContainer from './LoginActionsContainer'

// Icons
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

type passwordCriteriaIndicator = {
    text: string,
    flag: boolean,
}

const PasswordCriteriaIndicator = ({ text, flag }: passwordCriteriaIndicator) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <LoginActionsContainer style={styles.container}>
            <PropBasedIcon color={flag ? activeColors.ForestGreen : activeColors.SlateGrey} component={FontAwesomeIcon} name='circle' size={14} />
            <Text style={[styles.passwordIndicatorCriteriaText, {
                color: activeColors.DeepInk,
            }]}>{text}</Text>
        </LoginActionsContainer>
    )
}

export default PasswordCriteriaIndicator

const styles = StyleSheet.create({
    container: {
        marginVertical: 4
    },
    passwordIndicatorCriteriaText: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        marginLeft: 10
    }
})