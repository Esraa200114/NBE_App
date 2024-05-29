import React from 'react'
import { StyleSheet } from 'react-native'

// Components
import LoginActionsContainer from './LoginActionsContainer'
import FormCheckbox from '../atoms/FormCheckbox'
import ForgotPasswordText from '../atoms/ForgotPasswordText'

const RememberMeContainer = () => {
    return (
        <LoginActionsContainer style={styles.spacedContent}>
            <FormCheckbox />
            <ForgotPasswordText />
        </LoginActionsContainer>
    )
}

export default RememberMeContainer

const styles = StyleSheet.create({
    spacedContent: {
        justifyContent: "space-between",
    },
})