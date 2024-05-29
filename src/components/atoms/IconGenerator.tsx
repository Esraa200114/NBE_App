import React, { Component } from 'react';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro';

import { Colors } from '../../../constants/Colors';
import { color } from 'react-native-reanimated';

export type IconGeneratorProps = {
    type: keyof typeof iconConfig;
}

const iconConfig = {
    "email": {
        component: FontAwesomeIcon,
        name: "at",
        color: Colors.SlateGrey,
        size: 20
    },
    "notFocused-email": {
        component: FontAwesomeIcon,
        name: "at",
        color: Colors.PureWhite,
        size: 20
    },
    "password": {
        component: SimpleLineIcon,
        name: "lock",
        color: Colors.SlateGrey,
        size: 20
    },
    "notFocused-password": {
        component: SimpleLineIcon,
        name: "lock",
        color: Colors.PureWhite,
        size: 20
    },
    "eye-visible": {
        component: FontAwesomeIcon,
        name: 'eye',
        color: Colors.ForestGreen,
        size: 20
    },
    "notFocused-eye-visible": {
        component: FontAwesomeIcon,
        name: 'eye',
        color: Colors.PureWhite,
        size: 20
    },
    "eye-hidden": {
        component: IonicIcon,
        name: 'eye-off-outline',
        color: Colors.SlateGrey,
        size: 20
    },
    "notFocused-eye-hidden": {
        component: IonicIcon,
        name: 'eye-off-outline',
        color: Colors.PureWhite,
        size: 20
    },
    "white-check": {
        component: FontAwesomeIcon,
        name: 'check',
        color: Colors.PureWhite,
        size: 12
    },
    "fingerprint": {
        component: FontAwesome5Icon,
        name: 'fingerprint',
        color: Colors.AmberGold,
        size: 28,
    },
    "back-arrow": {
        component: MaterialIcon,
        name: 'arrow-back-ios-new',
        color: Colors.PureWhite,
        size: 17
    },
    "smart-phone": {
        component: FontAwesome6Icon,
        name: 'mobile-screen',
        color: Colors.SlateGrey,
        size: 23
    },
};

const IconGenerator = ({ type }: IconGeneratorProps) => {

    const { component: Icon, name, color, size } = iconConfig[type];

    return <Icon name={name} size={size} color={color} />;
};

export default IconGenerator;
