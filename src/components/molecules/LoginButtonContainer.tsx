import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

// Components
import LoginActionsContainer from './LoginActionsContainer'
import AppButton from '../atoms/AppButton'
import FingerPrintCard from '../atoms/FingerPrintCard'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Colors
import { Colors } from '../../../constants/Colors'

type LoginButtonContainerProps = {
    handleSubmit: () => void,
    isValid: boolean,
}

const LoginButtonContainer = ({handleSubmit, isValid}: LoginButtonContainerProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <LoginActionsContainer style={styles.spacedContent}>
            <AppButton title='Log In' onPress={handleSubmit} disabled={!isValid} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} width={"80%"} />
            <FingerPrintCard size={28} radius={12.5} padding={8} />
        </LoginActionsContainer>
    )
}

export default LoginButtonContainer

const styles = StyleSheet.create({
    spacedContent: {
        justifyContent: "space-between",
    },
})