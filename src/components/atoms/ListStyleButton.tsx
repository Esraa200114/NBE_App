import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

// Components
import PropBasedIcon from './PropBasedIcon'

// Colors
import { Colors } from '../../../constants/Colors'

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type ListStyleButtonProps = {
    isSelected: boolean,
    onPress: () => void,
    iconName: string
}

const ListStyleButton = ({ isSelected, onPress, iconName }: ListStyleButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.listDisplayStyleIconContainer, { backgroundColor: isSelected ? Colors.ForestGreen : Colors.PureWhite }]}>
            <PropBasedIcon color={isSelected ? Colors.PureWhite : Colors.SlateGrey} size={14} component={FontAwesome5Icon} name={iconName} />
        </TouchableOpacity>
    )
}

export default ListStyleButton

const styles = StyleSheet.create({
    listDisplayStyleIconContainer: {
        backgroundColor: Colors.ForestGreen,
        borderRadius: 12,
        padding: 5
    },
})