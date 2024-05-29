import React, { useContext } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Colors
import { Colors } from "../../constants/Colors";

// Theme Context
import { ThemeContext } from "../context/ThemeContext";

// Navigation
import { RootStackParamList } from "./MainStackNavigator";

// Components
import { drawerScreens } from "../components/organisms/DrawerScreens";
import DrawerContent from "../components/organisms/DrawerContent";

const Drawer = createDrawerNavigator();

type DrawerProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Drawer">,
}

const DrawerNavigator = ({ navigation }: DrawerProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <DrawerContent onConfirm={() => navigation.replace("Login")} props={props} />
            )}
            screenOptions={{
                drawerStyle: {
                    width: "85%",
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    backgroundColor: activeColors.MistyLavender,
                },
                headerShown: false,
                drawerInactiveBackgroundColor: activeColors.MistyLavender,
                drawerActiveBackgroundColor: activeColors.ForestGreen,
            }}>
            {
                drawerScreens.map((screen, index) => (
                    <Drawer.Screen key={index} {...screen} />
                ))
            }
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
