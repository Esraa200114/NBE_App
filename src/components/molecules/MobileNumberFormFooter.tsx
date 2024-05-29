import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
import AppButton from '../atoms/AppButton'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

// Colors
import { Colors } from '../../../constants/Colors';

type MobileNumberFormFooter = {
    handleSubmit: () => void,
    isValid: boolean,
};

const MobileNumberFormFooter = ({ handleSubmit, isValid }: MobileNumberFormFooter) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <React.Fragment>
            <View style={styles.footerButton}>
                <AppButton title='Next' onPress={handleSubmit} disabled={!isValid} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
            </View>
            <View style={styles.footerText}>
                <Text style={[styles.footerRegularText, {
                    color: activeColors.StoneGray
                }]}>By signing up, you agree to our <Text style={[styles.footerBoldText, {
                    color: activeColors.DeepInk
                }]}>Terms of Service</Text> and acknowledge that you have read our <Text style={[styles.footerBoldText, {
                    color: activeColors.DeepInk
                }]}>Privacy Policy</Text>.</Text>
            </View>
        </React.Fragment>
    )
}

export default MobileNumberFormFooter

const styles = StyleSheet.create({
    footerButton: {
        marginHorizontal: 26,
        marginBottom: 20
    },
    footerText: {
        marginHorizontal: 33,
        marginBottom: 20
    },
    footerRegularText: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        textAlign: "center",
    },
    footerBoldText: {
        fontFamily: "Roboto Bold",
    },
})