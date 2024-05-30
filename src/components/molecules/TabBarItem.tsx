import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import PropBasedIcon from '../atoms/PropBasedIcon';

// Colors
import { Colors } from '../../../constants/Colors';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

const TabBarItem = ({ iconComponent, iconName, iconSize, iconColor, text, focused }: any) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]
    
    return (
        <View style={[styles.tabItemContainer, { backgroundColor: focused ? activeColors.ForestGreen : activeColors.MistyLavender }]}>
            <PropBasedIcon component={iconComponent} color={focused ? activeColors.PureWhite : iconColor} size={iconSize} name={iconName} />
            <Text style={[styles.tabItemText, { color: focused ? activeColors.PureWhite : activeColors.SlateGrey }]}>{text}</Text>
        </View>
    );
};

export default TabBarItem;

const styles = StyleSheet.create({
    tabItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        width: 70,
        height: 70,
        marginHorizontal: 2
    },
    tabItemText: {
        fontFamily: 'Roboto Regular',
        fontSize: 10,
        lineHeight: 11.72,
        marginTop: 6
    }
});