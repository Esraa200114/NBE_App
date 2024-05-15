import React from 'react'
import { Colors } from '../../../constants/Colors'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList } from 'react-native-gesture-handler'
import BalanceMenuItem from '../molecules/BalanceMenuItem'
import { View } from 'react-native'

const BalanceMenu = () => {

    const BalanceMenuItemList = [
        {
            background: "#00C97426",
            label: "Accounts",
            iconSize: 24,
            iconColor: Colors.SpringGreen,
            component: FontAwesome5Icon,
            iconName: "money-bill-wave"
        },
        {
            background: "#00ADF826",
            label: "Cards",
            iconSize: 25,
            iconColor: Colors.SkyBlue,
            component: FontAwesomeIcon,
            iconName: "credit-card"
        },
        {
            background: "#F6A72126",
            label: "Utilities",
            iconSize: 25,
            iconColor: Colors.AmberGold,
            component: FontAwesome6Icon,
            iconName: "faucet-drip"
        },
        {
            background: "#FF002E26",
            label: "History",
            iconSize: 25,
            iconColor: Colors.VividRed,
            component: MaterialCommunityIcon,
            iconName: "file-document-outline"
        },
    ]

    return (
        <View style={{width: "100%"}}>
            <FlatList
                contentContainerStyle={{ gap: 20 }}
                horizontal={true}
                data={BalanceMenuItemList}
                renderItem={(item) => <BalanceMenuItem background={item.item.background} component={item.item.component} iconColor={item.item.iconColor} iconName={item.item.iconName} iconSize={item.item.iconSize} label={item.item.label} />}
            />
        </View>
    )
}

export default BalanceMenu
