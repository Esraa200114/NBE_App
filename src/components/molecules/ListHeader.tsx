import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Component
import BoldTitle from '../atoms/BoldTitle'
import LoginActionsContainer from './LoginActionsContainer'

type ListHeaderProps = {
    title: string
}

const ListHeader = ({ title }: ListHeaderProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <LoginActionsContainer style={styles.listHeaderContainer}>
            <BoldTitle title={title} color={activeColors.DeepInk} />
            <Text style={[styles.viewAllText, { color: activeColors.StoneGray }]}>View All</Text>
        </LoginActionsContainer>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    listHeaderContainer: {
        justifyContent: 'space-between',
    },
    viewAllText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
    },
})