import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../../../constants/Colors'
import { ReactNode } from 'react'

type AppCardProps = {
    radius: number,
    child: ReactNode
}

const AppCard = ({ radius, child }: AppCardProps) => {

    return (
        <View >
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? Colors.MistGrey : Colors.PureWhite,
                    borderRadius: radius
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
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.25,
        shadowRadius: 0.5,
        elevation: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})