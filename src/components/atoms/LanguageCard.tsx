import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../../../constants/Colors'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

type LanguageCardProps = {
    radius: number
}

const LanguageCard = ({ radius }: LanguageCardProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View >
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? activeColors.MistGrey : activeColors.PureWhite,
                    borderRadius: radius,
                    shadowColor: activeColors.MidnightBlack,
                },
                styles.languageCardContainer,
            ]}>
                <Text style={[styles.languageCardText, {
                    color: activeColors.ForestGreen,
                }]}>AR</Text>
            </Pressable>
        </View >
    )
}

export default LanguageCard

const styles = StyleSheet.create({
    languageCardContainer: {
        width: 40,
        height: 40,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.25,
        shadowRadius: 0.5,
        elevation: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    languageCardText: {
        lineHeight: 18.75,
        fontSize: 16,
        fontFamily: "Roboto Bold"
    }
})