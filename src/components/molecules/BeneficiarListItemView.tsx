import { Image, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import PropBasedIcon from '../atoms/PropBasedIcon'
import { Colors } from '../../../constants/Colors'
import { Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

type BeneficiarListItemViewProps = {
    beneficiaryItem: Beneficiary,
    onShowTransactions: () => void
}

const BeneficiarListItemView = ({ beneficiaryItem, onShowTransactions }: BeneficiarListItemViewProps) => {

    console.log(beneficiaryItem.phoneNumber);
    
    let formatedMobileNumber = beneficiaryItem.phoneNumber.substring(0, 3) + " " +
        beneficiaryItem.phoneNumber.substring(3, 6) + " " +
        beneficiaryItem.phoneNumber.substring(6, 9) + " " +
        beneficiaryItem.phoneNumber.substring(9, 13)

    return (
        <Pressable style={styles.beneficiarListItemContainer} onPress={onShowTransactions}>
            <Image source={{ uri: beneficiaryItem.image }} style={styles.beneficiarListItemImage} />
            <View style={styles.beneficiarListItemDetailsContainer}>
                <Text style={styles.beneficiarListItemName}>{beneficiaryItem.firstName + " " + beneficiaryItem.lastName}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.beneficiarListItemIconContainer}>
                        <PropBasedIcon name='phone-alt' component={FontAwesome5Icon} color={Colors.SlateGrey} size={6} />
                    </View>
                    <Text style={styles.beneficiarListItemDetail}>{formatedMobileNumber}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.beneficiarListItemIconContainer}>
                        <PropBasedIcon name='dollar-sign' component={FontAwesome5Icon} color={Colors.SlateGrey} size={6} />
                    </View>
                    <Text style={styles.beneficiarListItemDetail}>$802,828.61</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default BeneficiarListItemView

const styles = StyleSheet.create({
    beneficiarListItemContainer: {
        flexDirection: "row",
        backgroundColor: Colors.PureWhite,
        borderRadius: 18,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        padding: 14,
        marginHorizontal: 24,
        marginVertical: 2
    },
    beneficiarListItemImage: {
        shadowColor: Colors.MidnightBlack,
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
        color: Colors.DeepInk
    },
    beneficiarListItemIconContainer: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: "rgba(0, 0, 0, 0.09)",
        justifyContent: "center",
        alignItems: "center"
    },
    beneficiarListItemDetail: {
        fontFamily: "Roboto Regular",
        fontSize: 12,
        lineHeight: 14.06,
        color: Colors.SlateGrey,
        marginLeft: 6
    }
})