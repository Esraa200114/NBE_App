import React from "react";
import { Alert, Image, Pressable, StatusBar, StyleSheet, View } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../components/molecules/ScreenHeader";
import LanguageCard from "../components/atoms/LanguageCard";
import DrawerProfileCard from "../components/molecules/DrawerProfileCard";
import { Colors } from "../../constants/Colors";
import { drawerScreens } from "../components/organisms/DrawerScreens";
import DrawerItem from "../components/molecules/DrawerItem";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import IonicsIcon from "react-native-vector-icons/Ionicons"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { RootStackParamList } from "./StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

type DrawerProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Drawer">
}

const DrawerNavigator = ({ navigation }: DrawerProps) => {

    const showLogoutAlert = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Yes", onPress: () => navigation.replace("Login")}
            ]
        );
    };

    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <View>
                    <StatusBar backgroundColor={Colors.MistyLavender} barStyle="dark-content" />
                    <SafeAreaView style={{ height: "100%" }}>
                        <View style={{ paddingHorizontal: 10 }}>
                            <View style={{ marginHorizontal: 20 }}>
                                <ScreenHeader flexDirection={'row-reverse'}>
                                    <LanguageCard radius={13} />
                                    <Image source={require("../../assets/images/screens-logo.png")} />
                                </ScreenHeader>
                            </View>
                            <View style={{ marginTop: 26 }}>
                                <DrawerItemList {...props} />
                                <View style={{ paddingHorizontal: 10, paddingVertical: 4, borderRadius: 13, rowGap: 3 }}>
                                    <View style={{ backgroundColor: "#00000003", paddingVertical: 8, borderRadius: 13, paddingHorizontal: 8, marginVertical: 1 }}>
                                        <DrawerItem label="Calculators" component={MaterialCommunityIcon} focused={false} name="calculator-variant-outline" />
                                    </View>
                                    <View style={{ backgroundColor: "#00000003", paddingVertical: 8, borderRadius: 13, paddingHorizontal: 8, marginVertical: 1 }}>
                                        <DrawerItem label="Dark Mode" component={IonicsIcon} focused={false} name="moon" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, marginVertical: 17 }}>
                            <Pressable style={{ backgroundColor: Colors.MistyLavender, paddingVertical: 8, borderRadius: 13, paddingHorizontal: 8, marginHorizontal: 20, marginVertical: 5 }} onPress={showLogoutAlert}>
                                <DrawerItem label="Log Out" component={FontAwesome5Icon} focused={false} name="power-off" />
                            </Pressable>
                            <View style={{ marginHorizontal: 17 }}>
                                <DrawerProfileCard />
                            </View>
                        </View >
                    </SafeAreaView >
                </View >
            )}
            screenOptions={{
                drawerStyle: {
                    width: "85%",
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    backgroundColor: Colors.MistyLavender,
                },
                headerShown: false,
            }}
        >
            {
                drawerScreens.map((screen, index) => (
                    <Drawer.Screen key={index} {...screen} />
                ))
            }
        </Drawer.Navigator >
    );
};

export default DrawerNavigator;
