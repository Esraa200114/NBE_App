import React, { useContext } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Components
import PropBasedIcon from './PropBasedIcon'

// Icon
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

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
                <PropBasedIcon component={MaterialIcon} name='arrow-back-ios-new' color={Colors.PureWhite} size={17} />
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