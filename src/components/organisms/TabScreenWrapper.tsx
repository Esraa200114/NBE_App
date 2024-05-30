import React, { ReactNode, useContext } from 'react'
import { StatusBar, StyleSheet, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerActions, useNavigation } from '@react-navigation/native'

// Components
import TabHeader from './TabHeader'
import BackLogoHeader from './BackLogoHeader'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// Colors
import { Colors } from '../../../constants/Colors'

type TabScreenWrapperProps = {
    children: ReactNode,
    style: ViewStyle,
    showTabHeader: boolean,
    showNotificationButton: boolean
    onBack: () => void,
    isStatusBarTransparent: boolean
}

const TabScreenWrapper = ({ children, style, showTabHeader, onBack, showNotificationButton, isStatusBarTransparent }: TabScreenWrapperProps) => {

    const navigation = useNavigation();

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={[{ backgroundColor: activeColors.MistyLavender }, styles.container]}>
            {isStatusBarTransparent ?
                <StatusBar translucent backgroundColor="transparent" />
                :
                <StatusBar backgroundColor={activeColors.MistyLavender} barStyle={theme.mode === "dark" ? "light-content" : "dark-content"} />
            }
            <SafeAreaView style={style}>
                {showTabHeader ?
                    <TabHeader onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                    :
                    <BackLogoHeader onBack={onBack} showNotificationButton={showNotificationButton} />
                }
                {children}
            </SafeAreaView>
        </View>
    )
}

export default TabScreenWrapper

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})