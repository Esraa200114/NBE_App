import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View, DimensionValue } from 'react-native';

// Colors
import { Colors } from '../../../constants/Colors';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

type AppButtonProps = {
    title: string;
    onPress: () => void;
    disabled: boolean;
    bgColor: string;
    titleColor: string;
    width?: DimensionValue,
};

const AppButton = ({ title, onPress, disabled, bgColor, titleColor, width = "100%" }: AppButtonProps) => {
    
    const { theme } = useContext(ThemeContext);
    let activeColors = (Colors as any)[theme.mode];

    return (
        <View style={[styles.buttonContainer, styles.commonStyle, { width }]}>
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
                    styles.commonStyle,
                    disabled && { backgroundColor: activeColors.SlateGrey },
                ]}
            >
                <Text style={[styles.buttonText, { color: titleColor }]}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
    },
    pressable: {
        height: "100%",
    },
    commonStyle: {
        width: "100%",
        borderRadius: 12.5,
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: "Roboto Bold",
        fontSize: 16,
        lineHeight: 18.75,
        textAlign: "center",
    },
});
