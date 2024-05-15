import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropBasedIcon from '../atoms/PropBasedIcon';
import { Colors } from '../../../constants/Colors';

const TabBarItem = ({ iconComponent, iconName, iconSize, iconColor, text, focused }: any) => {
    return (
        <View style={[styles.tabItemContainer, { backgroundColor: focused ? Colors.ForestGreen : Colors.MistyLavender }]}>
            <PropBasedIcon component={iconComponent} color={focused ? Colors.PureWhite : iconColor} size={iconSize} name={iconName} />
            <Text style={[styles.tabItemText, { color: focused ? Colors.PureWhite : Colors.SlateGrey }]}>{text}</Text>
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