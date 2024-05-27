import React, { useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../../../constants/Colors'
import { ThemeContext } from '../../context/ThemeContext'

type AppButtonProps = {
    title: string,
    onPress: () => void,
    disabled: boolean,
    bgColor: string,
    titleColor: string
}

const AppButton = ({ title, onPress, disabled, bgColor, titleColor }: AppButtonProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]
    
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                disabled={disabled}
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? bgColor === activeColors.PureWhite ? activeColors.LightSilver : activeColors.DarkForestGreen
                            : bgColor === activeColors.PureWhite ? activeColors.PureWhite : activeColors.ForestGreen,
                    },
                    styles.pressable,
                    disabled && { backgroundColor: activeColors.SlateGrey }
                ]}
            >
                <Text style={[styles.buttonText, { color: titleColor }]}>{title}</Text>
            </Pressable>
        </View >
    );
};

export default AppButton

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        height: 50,
        borderRadius: 12.5,
        justifyContent: "center",
    },
    pressable: {
        width: "100%",
        height: "100%",
        borderRadius: 12.5,
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: "Roboto Bold",
        fontSize: 16,
        lineHeight: 18.75,
        textAlign: "center",
    }
});
