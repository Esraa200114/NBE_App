import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// Colors
import { Colors } from '../../../constants/Colors';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

const ThemeSwitch = () => {

    const { theme, updateTheme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [switchOn, setSwitchOn] = useState(theme.mode === "dark");

    const toggleSwitch = () => {
        updateTheme(theme.mode === "dark" ? { mode: "light" }: { mode: "dark" })
        setSwitchOn(!switchOn);
    };

    return (
        <TouchableOpacity
            style={[styles.outer, {
                justifyContent: switchOn ? 'flex-end' : 'flex-start', backgroundColor: activeColors.PureWhite,
                shadowColor: activeColors.MidnightBlack,
            }]}
            activeOpacity={1}
            onPress={toggleSwitch}>
            <View style={[styles.inner, { backgroundColor: switchOn ? activeColors.ForestGreen : activeColors.lightGray }]} />
        </TouchableOpacity>
    );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
    outer: {
        borderRadius: 15,
        width: 40,
        height: 20,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 1,
        paddingHorizontal: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inner: {
        width: 16,
        height: 16,
        borderRadius: 12,
    }
});
