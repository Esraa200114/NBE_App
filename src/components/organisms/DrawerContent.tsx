import React, { useContext } from 'react'
import { View, Image, StatusBar, } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList } from "@react-navigation/drawer";

import { Colors } from '../../../constants/Colors';
import { ThemeContext } from '../../context/ThemeContext';

import SettingsGroup from '../molecules/SettingsGroup';
import LogOutItem from '../molecules/LogOutItem';
import AbsoluteBottomWrapper from './AbsoluteBottomWrapper';
import ScreenHeader from '../molecules/ScreenHeader';
import LanguageCard from '../atoms/LanguageCard';
import DrawerProfileCard from '../molecules/DrawerProfileCard';

type DrawerContentProps = {
    onConfirm: () => void,
    props: any
}

const DrawerContent = ({ onConfirm, props }: DrawerContentProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View>
            <StatusBar backgroundColor={activeColors.MistyLavender} barStyle={theme.mode === "dark" ? "light-content" : "dark-content"} />
            <SafeAreaView style={{ height: "100%" }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ marginHorizontal: 20 }}>
                        <ScreenHeader flexDirection={'row-reverse'}>
                            <LanguageCard radius={13} />
                            <Image source={require("../../../assets/images/screens-logo.png")} />
                        </ScreenHeader>
                    </View>
                    <View style={{ marginTop: 26 }}>
                        <DrawerItemList {...props} />
                        <SettingsGroup />
                    </View>
                </View>
                <AbsoluteBottomWrapper style={{
                    marginVertical: 17,
                }}>
                    <LogOutItem onConfirm={onConfirm} />
                    <View style={{ marginHorizontal: 17 }}>
                        <DrawerProfileCard />
                    </View>
                </AbsoluteBottomWrapper>
            </SafeAreaView>
        </View>
    )
}

export default DrawerContent
