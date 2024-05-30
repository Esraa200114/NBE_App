// Pages
import BottomTabPage from "../pages/BottomTabPage";

// Components
import DrawerItem from "./DrawerItem";

const drawerScreenItemOptions = {
    drawerLabel: "",
    drawerHideStatusBarOnOpen: false,
    drawerItemStyle: {
        borderRadius: 13,
        marginVertical: 0.5,
    },
};

export const drawerScreenItem = (label: string, component: React.ComponentType<any>, iconName: string) => {

    return {
        name: label,
        component: BottomTabPage,
        options: {
            drawerIcon: ({ focused }: any) => (
                <DrawerItem component={component} name={iconName} label={label} focused={focused} />
            ),
            ...drawerScreenItemOptions
        }
    }
}