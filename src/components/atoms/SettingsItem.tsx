import React from 'react'
import { StyleSheet, View } from 'react-native'

import DrawerItem from '../molecules/DrawerItem'

type SettingsItemProps = {
    label: string,
    component: React.ComponentType<any>,
    name: string,

}

const SettingsItem = ({ label, component, name }: SettingsItemProps) => {
    return (
        <View style={styles.settingsItemContainer}>
            <DrawerItem label={label} component={component} focused={false} name={name} />
        </View>
    )
}

export default SettingsItem

const styles = StyleSheet.create({
    settingsItemContainer: {
        backgroundColor: "#00000003",
        paddingVertical: 8,
        borderRadius: 13,
        paddingHorizontal: 8,
        marginVertical: 1
    }
})