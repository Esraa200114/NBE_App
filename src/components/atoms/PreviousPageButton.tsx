import { Pressable, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import IconGenerator from './IconGenerator'

import { Colors } from '../../../constants/Colors'
import { ThemeContext } from '../../context/ThemeContext'

type PreviousPageButtonProps = {
    onPress: () => void
}

const PreviousPageButton = ({ onPress }: PreviousPageButtonProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={[styles.previousPageButtonContainer, { backgroundColor: activeColors.ForestGreen, }]}>
            <Pressable onPress={onPress} style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? activeColors.DarkForestGreen
                        : activeColors.ForestGreen,
                },
                styles.pressable,
            ]}>
                <IconGenerator type={'back-arrow'} />
            </Pressable>
        </View>
    )
}

export default PreviousPageButton

const styles = StyleSheet.create({
    previousPageButtonContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    pressable: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
})