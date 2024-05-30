// Icons
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

// Components
import { drawerScreenItem } from "../molecules/DrawerScreenItem";

export const drawerScreens = [
    drawerScreenItem('Account Summary', MaterialCommunityIcon, "file-chart-outline"),
    drawerScreenItem('Open Certificates & Deposits', MaterialCommunityIcon, "file-certificate-outline"),
    drawerScreenItem('Payment Services', FontAwesome6Icon, "money-check-dollar"),
    drawerScreenItem('Cards Services', FontAwesomeIcon, "credit-card"),
    drawerScreenItem('Hard Token', FontAwesome6Icon, "tablet-screen-button"),
    drawerScreenItem('Offers', MaterialCommunityIcon, "brightness-percent"),
    drawerScreenItem('Customer Services', FontAwesome5Icon, "users"),
];
