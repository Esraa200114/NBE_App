import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppButton from '../atoms/AppButton'
import MissionCompleteModal from '../molecules/MissionCompleteModal'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants/Colors'
import TabHeader from '../organisms/TabHeader'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import PropBasedIcon from '../atoms/PropBasedIcon'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import BeneficiarGridItem from '../molecules/BeneficiarGridItem'
import BeneficiarListItem from '../molecules/BeneficiarListItem'

const BeneficiariesScreen = () => {

    const navigation = useNavigation();
    const [isSelectedStyleGrid, setIsSelectedStyleGrid] = useState(true)

    const beneficiariesList = [
        {
            image: require("../../../assets/images/hala.png"),
            fullName: "Jasmine Robert",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/sam.jpg"),
            fullName: "Ahmad Sami",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/marten.jpg"),
            fullName: "Mike Spectre",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/jose.jpg"),
            fullName: "Luis Litt",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/casy.jpg"),
            fullName: "Dona White",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/robert.jpg"),
            fullName: "Robert Walter",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/martha.jpg"),
            fullName: "Martha Jake",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/alex.png"),
            fullName: "Alex John",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/yara.jpg"),
            fullName: "Yara Ahmed",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
        {
            image: require("../../../assets/images/karen.jpg"),
            fullName: "Angela White",
            phoneNumber: "+20 123 456 7890",
            balance: "$802,828.61"
        },
    ]

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle={"dark-content"} />
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MistyLavender }}>
                <View style={styles.screenContainer}>
                    <TabHeader onPress={(() => navigation.dispatch(DrawerActions.openDrawer()))} />
                    <View style={styles.beneficiariesListHeader}>
                        <Text style={styles.beneficiariesListHeading}>
                            Beneficiaries
                        </Text>
                        <View style={styles.listDisplayStyleIconsContainer}>
                            <TouchableOpacity onPress={() => setIsSelectedStyleGrid(true)} style={[styles.listDisplayStyleIconContainer, { backgroundColor: isSelectedStyleGrid ? Colors.ForestGreen : Colors.PureWhite }]}>
                                <PropBasedIcon color={isSelectedStyleGrid ? Colors.PureWhite : Colors.SlateGrey} size={14} component={FontAwesome5Icon} name='th-large' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setIsSelectedStyleGrid(false)} style={[styles.listDisplayStyleIconContainer, { backgroundColor: !isSelectedStyleGrid ? Colors.ForestGreen : Colors.PureWhite }]}>
                                <PropBasedIcon color={!isSelectedStyleGrid ? Colors.PureWhite : Colors.SlateGrey} size={14} component={FontAwesome5Icon} name='list' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.beneficiariesListContainer}>
                    {isSelectedStyleGrid && <FlatList
                        contentContainerStyle={{
                            marginHorizontal: 25, rowGap: 8,
                            justifyContent: "center",
                            padding: 1
                        }}
                        data={beneficiariesList}
                        numColumns={4}
                        renderItem={(item) => <BeneficiarGridItem image={item.item.image} name={item.item.fullName} />} />}
                    {!isSelectedStyleGrid && <FlatList
                        contentContainerStyle={{
                            rowGap: 10,
                            paddingVertical: 5
                        }}
                        data={beneficiariesList}
                        renderItem={(item) => <BeneficiarListItem image={item.item.image} name={item.item.fullName} balance={item.item.balance} mobileNumber={item.item.phoneNumber}/>} />}
                </View>
            </SafeAreaView>
        </View >
    )
}

export default BeneficiariesScreen

const styles = StyleSheet.create({
    screenContainer: {
        // backgroundColor: Colors.MistyLavender,
        paddingHorizontal: 25,
        paddingTop: 16
    },
    beneficiariesListHeader: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    beneficiariesListHeading: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        color: Colors.DeepInk
    },
    listDisplayStyleIconsContainer: {
        flexDirection: "row",
        columnGap: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 2,
        backgroundColor: Colors.PureWhite,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-between",
        height: 30,
        paddingHorizontal: 4,
    },
    listDisplayStyleIconContainer: {
        backgroundColor: Colors.ForestGreen,
        borderRadius: 12,
        padding: 5
    },
    beneficiariesListContainer: {
        flex: 1,
        marginTop: 20,
        // backgroundColor: Colors.MistyLavender
    }
})
