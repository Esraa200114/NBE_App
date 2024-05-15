import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Colors } from '../../constants/Colors'

import HomePage from '../components/pages/HomePage'
import TransferPage from '../components/pages/TransferPage'
import BeneficiariesPage from '../components/pages/BeneficiariesPage'
import ATMsPage from '../components/pages/ATMsPage'
import AirPayPage from '../components/pages/AirPayPage'

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

import PropBasedIcon from '../components/atoms/PropBasedIcon'
import TabBarItem from '../components/molecules/TabBarItem'

const Tab = createBottomTabNavigator()

const BottomTabsNavigator = ({ navigation }: any) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: styles.tabBarContainer,
            tabBarShowLabel: false,
            headerShown: false
        }}>
            <Tab.Screen name='Home' component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <TabBarItem
                        iconComponent={FontAwesome5Icon}
                        iconName='home'
                        iconSize={30}
                        iconColor={Colors.SlateGrey}
                        text='Home'
                        focused={focused}
                    />
                ),
            }} />

            <Tab.Screen name='Transfer' component={TransferPage} options={{
                tabBarIcon: ({ focused }) => (
                    <TabBarItem
                        iconComponent={FontAwesomeIcon}
                        iconName='paper-plane-o'
                        iconSize={30}
                        iconColor={Colors.SlateGrey}
                        text='Transfer'
                        focused={focused}
                    />
                ),
            }} />

            <Tab.Screen name='Beneficiaries' component={BeneficiariesPage} options={{
                tabBarIcon: ({ focused }) => (
                    <TabBarItem
                        iconComponent={FontAwesome5Icon}
                        iconName='users'
                        iconSize={30}
                        iconColor={Colors.SlateGrey}
                        text='Beneficiaries'
                        focused={focused}
                    />
                ),
            }} />

            <Tab.Screen name='ATMs' component={ATMsPage} options={{
                tabBarIcon: ({ focused }) => (
                    <TabBarItem
                        iconComponent={SimpleLineIcon}
                        iconName='location-pin'
                        iconSize={30}
                        iconColor={Colors.SlateGrey}
                        text="ATMs"
                        focused={focused}
                    />
                ),
            }} />

            <Tab.Screen name='Air Pay' component={AirPayPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <View style={[styles.tabBarBadge, { backgroundColor: focused ? Colors.AmberGold : Colors.PaleGray, borderColor: focused ? Colors.AmberGold : Colors.PureWhite }]}>
                            <PropBasedIcon component={FontAwesome5Icon} color={focused ? Colors.PureWhite : Colors.MediumGray} size={10.64} name='fingerprint' />
                        </View>
                        <TabBarItem
                            iconComponent={FontAwesome5Icon}
                            iconName='credit-card'
                            iconSize={30}
                            iconColor={Colors.SlateGrey}
                            text='Air Pay'
                            focused={focused}
                        />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator

const styles = StyleSheet.create({
    tabBarContainer: {
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 25,
        elevation: 8,
        paddingHorizontal: 5,
        // position: 'absolute',
        // bottom: 0,
    },
    tabBarBadge: {
        borderRadius: 6,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 19,
        height: 19,
        position: 'absolute',
        zIndex: 1,
        left: -2,
        top: -2
    },
})