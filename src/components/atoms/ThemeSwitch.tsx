import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants/Colors';

const ThemeSwitch = () => {
    const [switchOn, setSwitchOn] = useState(false);

    const toggleSwitch = () => {
        setSwitchOn(!switchOn);
    };

    return (
        <TouchableOpacity
            style={[styles.outer, { justifyContent: switchOn ? 'flex-end' : 'flex-start' }]}
            activeOpacity={1}
            onPress={toggleSwitch}>
            <View style={[styles.inner, { backgroundColor: switchOn ? Colors.ForestGreen : Colors.lightGray }]} />
        </TouchableOpacity>
    );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
    outer: {
        borderRadius: 15,
        width: 40,
        height: 20,
        backgroundColor: Colors.PureWhite,
        shadowColor: Colors.MidnightBlack,
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
