import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NoBeneficiariesMessage from '../molecules/NoBeneficiariesMessage'
import BeneficiariesListHeader from '../organisms/BeneficiariesListHeader'
import TabHeader from '../organisms/TabHeader'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Colors } from '../../../constants/Colors'
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { beneficiariesList } from '../../../constants/Beneficiaries'
import BeneficiarGridItem from '../molecules/BeneficiarGridItem'
import BeneficiarListItem from '../molecules/BeneficiarListItem'

type BeneficiariesListScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiariesList">,
    beneficiaries: Beneficiary[];
    onDeleteBeneficiary: (id: number) => void;
    onEditBeneficiary: (beneficiary: Beneficiary) => void;
}

const BeneficiariesListScreen = ({ navigation, beneficiaries, onDeleteBeneficiary, onEditBeneficiary }: BeneficiariesListScreenProps) => {

    const drawerNavigation = useNavigation();
    const [isSelectedStyleGrid, setIsSelectedStyleGrid] = useState(true)

    const handleOpenAddBeneficiaryForm = () => {
        navigation.push("BeneficiaryDetailsForm", {
            beneficiary: {
                id: Math.random(),
                image: "",
                firstName: "",
                lastName: "",
                bankBranch: "",
                accountNumber: "",
                phoneNumber: "",
                email: ""
            }
        });
    };

    let row: any = [];
    let prevOpenedRow: any;

    const closeRow = (index: number) => {
        console.log('closerow');
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
            prevOpenedRow.close();
        }
        prevOpenedRow = row[index];
    };

    console.log(beneficiaries);

    const onEditBeneficiaryHandler = (index: number, updatedBeneficiary: Beneficiary) => {
        onEditBeneficiary(updatedBeneficiary)
        row[index].close()
    }

    const onDeleteBeneficiaryHandler = (index: number, id: number) => {
        onDeleteBeneficiary(id)
        row[index].close()
    }

    let screenContent;
    if (beneficiaries.length === 0) {
        screenContent = <NoBeneficiariesMessage openForm={handleOpenAddBeneficiaryForm} />
    } else {
        screenContent = <View style={styles.beneficiariesListContainer}>
            {isSelectedStyleGrid && <FlatList
                contentContainerStyle={{
                    marginHorizontal: 25, rowGap: 8,
                    justifyContent: "center",
                    padding: 1
                }}
                data={beneficiaries}
                numColumns={4}
                renderItem={(item) => <BeneficiarGridItem image={item.item.image} firstName={item.item.firstName} />} />}
            {!isSelectedStyleGrid && <FlatList
                contentContainerStyle={{
                    rowGap: 10,
                    paddingVertical: 5
                }}
                data={beneficiaries}
                renderItem={(item) => <BeneficiarListItem
                    beneficiaryItem={item}
                    onDelete={onDeleteBeneficiaryHandler}
                    onEdit={onEditBeneficiaryHandler}
                    onCloseRow={closeRow}
                    row={row} />} />}
        </View>
    }

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle={"dark-content"} />
            <SafeAreaView style={styles.screenContent}>
                <View style={styles.screenHeader}>
                    <TabHeader onPress={(() => drawerNavigation.dispatch(DrawerActions.openDrawer()))} />
                    <BeneficiariesListHeader isSelectedStyleGrid={isSelectedStyleGrid} setListStyle={() => setIsSelectedStyleGrid(false)} setGridStyle={() => setIsSelectedStyleGrid(true)} openForm={handleOpenAddBeneficiaryForm} />
                </View>
                {screenContent}
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