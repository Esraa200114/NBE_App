import React from 'react';
import { View, StyleSheet } from 'react-native';

type PropBasedIconProps<T> = {
    component: React.ComponentType<any>,
    name: string,
    color: string,
    size: number
};

const PropBasedIcon = <T extends React.ComponentType<any>>({ component: IconComponent, name, color, size }: PropBasedIconProps<T>) => {
    return (
        <IconComponent name={name} size={size} color={color} />
    );
};

export default PropBasedIcon;

const styles = StyleSheet.create({});
