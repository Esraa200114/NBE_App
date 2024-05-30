import React, { useState, useContext } from 'react'
import { StyleSheet, Pressable } from 'react-native'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

// Colors
import { Colors } from '../../../constants/Colors';

// Components
import DrawerItem from './DrawerItem';
import CustomAlert from './CustomAlert';

// Icons
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

type LogOutItemProps = {
    onConfirm: () => void
}

const LogOutItem = ({ onConfirm }: LogOutItemProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [visible, setVisible] = useState(false)

    return (
        <React.Fragment>
            <CustomAlert title='Logout' message='Are you sure you want to logout?' visible={visible} onConfirm={onConfirm} onCancel={() => setVisible(false)} />
            <Pressable style={{ ...styles.logOutItemContainer, backgroundColor: activeColors.MistyLavender }} onPress={() => setVisible(true)}>
                <DrawerItem label="Log Out" component={FontAwesome5Icon} focused={false} name="power-off" />
            </Pressable>
        </React.Fragment >
    )
}

export default LogOutItem

const styles = StyleSheet.create({
    logOutItemContainer: {
        paddingVertical: 8,
        borderRadius: 13,
        paddingHorizontal: 8,
        marginHorizontal: 20,
        marginVertical: 5
    }
})