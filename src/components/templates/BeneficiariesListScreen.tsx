import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NoBeneficiariesMessage from '../molecules/NoBeneficiariesMessage'
import BeneficiariesListHeader from '../organisms/BeneficiariesListHeader'
import TabHeader from '../organisms/TabHeader'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Colors } from '../../../constants/Colors'
import { BeneficiariesStackParamList } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type BeneficiariesListScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiariesList">
}

const BeneficiariesListScreen = ({ navigation }: BeneficiariesListScreenProps) => {

    const drawerNavigation = useNavigation();
    const [isSelectedStyleGrid, setIsSelectedStyleGrid] = useState(true)

    const handleOpenBeneficiaryForm = () => {
        navigation.push("BeneficiaryDetailsForm", {
            image: "",
            firstName: "",
            lastName: "",
            bankBranch: "",
            accountNumber: "",
            phoneNumber: "",
            email: ""
        });
    };    

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle={"dark-content"} />
            <SafeAreaView style={styles.screenContent}>
                <View style={styles.screenHeader}>
                    <TabHeader onPress={(() => drawerNavigation.dispatch(DrawerActions.openDrawer()))} />
                    <BeneficiariesListHeader isSelectedStyleGrid={isSelectedStyleGrid} setListStyle={() => setIsSelectedStyleGrid(false)} setGridStyle={() => setIsSelectedStyleGrid(true)} openForm={handleOpenBeneficiaryForm}/>
                </View>

                <NoBeneficiariesMessage openForm={handleOpenBeneficiaryForm}/>
                {/* <View style={styles.beneficiariesListContainer}> */}
                {/* {isSelectedStyleGrid && <FlatList
                        contentContainerStyle={{
                            marginHorizontal: 25, rowGap: 8,
                            justifyContent: "center",
                            padding: 1
                        }}
                        data={beneficiariesList}
                        numColumns={4}
                        renderItem={(item) => <BeneficiarGridItem image={item.item.image} name={item.item.fullName} />} />} */}
                {/* {!isSelectedStyleGrid && <FlatList
                        contentContainerStyle={{
                            rowGap: 10,
                            paddingVertical: 5
                        }}
                        data={beneficiariesList}
                        renderItem={(item) => <BeneficiarListItem image={item.item.image} name={item.item.fullName} balance={item.item.balance} mobileNumber={item.item.phoneNumber}/>} />} */}
                {/* </View> */}
            </SafeAreaView>
        </View >
    )
}

export default BeneficiariesListScreen

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    screenContent: {
        flex: 1,
        backgroundColor: Colors.MistyLavender
    },
    screenHeader: {
        paddingHorizontal: 25,
        paddingTop: 16
    },
    beneficiariesListContainer: {
        flex: 1,
        marginTop: 20,
    }
})