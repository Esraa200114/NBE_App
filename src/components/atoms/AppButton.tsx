import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../../../constants/Colors'

type AppButtonProps = {
    title: string,
    onPress: () => void,
    disabled: boolean
}

const AppButton = ({ title, onPress, disabled }: AppButtonProps) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                disabled={disabled}
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? title === "Finish" ? Colors.LightSilver : Colors.DarkForestGreen
                            : title === "Finish" ? Colors.PureWhite : Colors.ForestGreen,
                    },
                    styles.pressable,
                    disabled && { backgroundColor: Colors.SlateGrey }
                ]}
            >
                <Text style={[styles.buttonText, title === "Finish" && { color: Colors.ForestGreen }]}>{title}</Text>
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
        color: Colors.PureWhite
    }
});
