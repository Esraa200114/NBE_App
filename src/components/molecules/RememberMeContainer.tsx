import React from 'react'
import { StyleSheet } from 'react-native'

// Components
import LoginActionsContainer from './LoginActionsContainer'
import FormCheckbox from '../atoms/FormCheckbox'
import ForgotPasswordText from '../atoms/ForgotPasswordText'

type RememberMeContainerProps = {
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const RememberMeContainer = ({checked, setChecked}: RememberMeContainerProps) => {
    return (
        <LoginActionsContainer style={styles.spacedContent}>
            <FormCheckbox checked={checked} setChecked={setChecked}/>
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