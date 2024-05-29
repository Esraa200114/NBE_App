import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type LoginActionsContainerProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};

const  LoginActionsContainer = ({ children, style }: LoginActionsContainerProps) => {
    return <View style={[styles.rowCenteredItems, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    rowCenteredItems: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default LoginActionsContainer;
