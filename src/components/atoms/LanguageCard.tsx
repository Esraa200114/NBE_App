import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../../../constants/Colors'

type LanguageCardProps = {
    radius: number
}

const LanguageCard = ({ radius }: LanguageCardProps) => {

    return (
        <View >
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? Colors.MistGrey : Colors.PureWhite,
                    borderRadius: radius
                },
                styles.languageCardContainer,
            ]}>
                <Text style={styles.languageCardText}>AR</Text>
            </Pressable>
        </View >
    )
}

export default LanguageCard

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
    languageCardText: {
        color: Colors.ForestGreen,
        lineHeight: 18.75,
        fontSize: 16,
        fontFamily: "Roboto Bold"
    }
})