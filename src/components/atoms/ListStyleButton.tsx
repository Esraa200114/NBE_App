import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

// Components
import PropBasedIcon from './PropBasedIcon'

// Colors
import { Colors } from '../../../constants/Colors'

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { ThemeContext } from '../../context/ThemeContext'

type ListStyleButtonProps = {
    isSelected: boolean,
    onPress: () => void,
    iconName: string
}

const ListStyleButton = ({ isSelected, onPress, iconName }: ListStyleButtonProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]
    
    return (
        <TouchableOpacity onPress={onPress} style={[styles.listDisplayStyleIconContainer, { backgroundColor: isSelected ? activeColors.ForestGreen : activeColors.PureWhite }]}>
            <PropBasedIcon color={isSelected ? activeColors.PureWhite : activeColors.SlateGrey} size={14} component={FontAwesome5Icon} name={iconName} />
        </TouchableOpacity>
    )
}

export default ListStyleButton

const styles = StyleSheet.create({
    listDisplayStyleIconContainer: {
        borderRadius: 12,
        padding: 5
    },
})