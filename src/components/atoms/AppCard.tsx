import { ReactNode, useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type AppCardProps = {
    radius: number,
    child: ReactNode,
    isBgLight: boolean
}

const AppCard = ({ radius, child, isBgLight }: AppCardProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]
    
    let bgColor, bgPressedColor;
    
    if (isBgLight) {
        bgColor = activeColors.PureWhite
        bgPressedColor = activeColors.MistGrey
    } else {
        bgColor = activeColors.CloudGray
        bgPressedColor = activeColors.SlateGrey
    }

    return (
        <View >
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? bgPressedColor : bgColor,
                    borderRadius: radius,
                    shadowColor: activeColors.MidnightBlack,
                },
                styles.languageCardContainer,
            ]}>
                {child}
            </Pressable>
        </View >
    )
}

export default AppCard

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
})