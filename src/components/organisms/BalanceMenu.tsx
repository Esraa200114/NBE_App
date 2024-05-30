import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

// Colors
import { Colors } from '../../../constants/Colors'

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

// Components
import BalanceMenuItem from '../molecules/BalanceMenuItem'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

const BalanceMenu = () => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const BalanceMenuItemList = [
        {
            background: "#00C97426",
            label: "Accounts",
            iconSize: 24,
            iconColor: activeColors.SpringGreen,
            component: FontAwesome5Icon,
            iconName: "money-bill-wave"
        },
        {
            background: "#00ADF826",
            label: "Cards",
            iconSize: 25,
            iconColor: activeColors.SkyBlue,
            component: FontAwesomeIcon,
            iconName: "credit-card"
        },
        {
            background: "#F6A72126",
            label: "Utilities",
            iconSize: 25,
            iconColor: activeColors.AmberGold,
            component: FontAwesome6Icon,
            iconName: "faucet-drip"
        },
        {
            background: "#FF002E26",
            label: "History",
            iconSize: 25,
            iconColor: activeColors.VividRed,
            component: MaterialCommunityIcon,
            iconName: "file-document-outline"
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
                horizontal={true}
                data={BalanceMenuItemList}
                renderItem={(item) => <BalanceMenuItem background={item.item.background} component={item.item.component} iconColor={item.item.iconColor} iconName={item.item.iconName} iconSize={item.item.iconSize} label={item.item.label} />}
            />
        </View>
    )
}

export default BalanceMenu

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    list: {
        gap: 20
    }
})
