import React, { useContext } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

// Icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

// Components
import PropBasedIcon from '../atoms/PropBasedIcon'

// Colors
import { Colors } from '../../../constants/Colors'

// Navigation
import { Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type BeneficiarListItemViewProps = {
    beneficiaryItem: Beneficiary,
    onShowTransactions: () => void
}

const BeneficiarListItemView = ({ beneficiaryItem, onShowTransactions }: BeneficiarListItemViewProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    let formatedMobileNumber = beneficiaryItem.phoneNumber.substring(0, 3) + " " +
        beneficiaryItem.phoneNumber.substring(3, 6) + " " +
        beneficiaryItem.phoneNumber.substring(6, 9) + " " +
        beneficiaryItem.phoneNumber.substring(9, 13)

    return (
        <Pressable style={[styles.beneficiarListItemContainer, {
            backgroundColor: activeColors.PureWhite, shadowColor: activeColors.MidnightBlack,
        }]} onPress={onShowTransactions}>
            <Image source={{ uri: beneficiaryItem.image }} style={[styles.beneficiarListItemImage, {
                shadowColor: activeColors.MidnightBlack,
            }]} />
            <View style={styles.beneficiarListItemDetailsContainer}>
                <Text style={[styles.beneficiarListItemName, {
                    color: activeColors.DeepInk
                }]}>{beneficiaryItem.firstName + " " + beneficiaryItem.lastName}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.beneficiarListItemIconContainer, {
                        backgroundColor: activeColors.MidnightBlack,
                    }]}>
                        <PropBasedIcon name='phone-alt' component={FontAwesome5Icon} color={activeColors.SlateGrey} size={6} />
                    </View>
                    <Text style={[styles.beneficiarListItemDetail, {
                        color: activeColors.SlateGrey,
                    }]}>{formatedMobileNumber}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.beneficiarListItemIconContainer, {
                        backgroundColor: activeColors.MidnightBlack,
                    }]}>
                        <PropBasedIcon name='dollar-sign' component={FontAwesome5Icon} color={activeColors.SlateGrey} size={6} />
                    </View>
                    <Text style={[styles.beneficiarListItemDetail, {
                        color: activeColors.SlateGrey,
                    }]}>$802,828.61</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default BeneficiarListItemView

const styles = StyleSheet.create({
    beneficiarListItemContainer: {
        flexDirection: "row",
        borderRadius: 18,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        padding: 14,
        marginHorizontal: 1,
        marginVertical: 2
    },
    beneficiarListItemImage: {
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 18,
        elevation: 10,
        borderRadius: 8,
        width: 59,
        height: 59
    },
    beneficiarListItemDetailsContainer: {
        marginLeft: 10,
        rowGap: 4
    },
    beneficiarListItemName: {
        fontFamily: "Roboto Bold",
        fontSize: 14,
        lineHeight: 16.41,
    },
    beneficiarListItemIconContainer: {
        width: 15,
        height: 15,
        borderRadius: 100,
        opacity: 0.09,
        justifyContent: "center",
        alignItems: "center"
    },
    beneficiarListItemDetail: {
        fontFamily: "Roboto Regular",
        fontSize: 12,
        lineHeight: 14.06,
        marginLeft: 6
    }
})