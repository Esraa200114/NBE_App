import React, { useContext } from 'react';
import { View } from 'react-native';
import TabBarItem from '../molecules/TabBarItem';
import { Tab } from '../../navigation/BottomTabsNavigator';
import { Colors } from '../../../constants/Colors';
import { ThemeContext } from '../../context/ThemeContext';
import BadgeIcon from '../atoms/BadgeIcon';

type TabScreenProps = {
    name: string;
    component: React.ComponentType<any>;
    iconComponent: React.ComponentType<any>;
    iconName: string;
    text: string;
    tabBarHideOnKeyboard?: boolean;
    hasBadge?: boolean;
};

const createTabScreen = ({ name, component, iconComponent, iconName, text, tabBarHideOnKeyboard, hasBadge }: TabScreenProps) => {
    return () => {
        
        const { theme } = useContext(ThemeContext);
        let activeColors = (Colors as any)[theme.mode];

        return (
            <Tab.Screen
                name={name}
                component={component}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {hasBadge && < BadgeIcon focused={focused} />}
                            <TabBarItem
                                iconComponent={iconComponent}
                                iconName={iconName}
                                iconSize={30}
                                iconColor={activeColors.SlateGrey}
                                text={text}
                                focused={focused}
                            />
                        </View>
                    ),
                    tabBarHideOnKeyboard,
                }}
            />
        );
    };
};

export default createTabScreen;