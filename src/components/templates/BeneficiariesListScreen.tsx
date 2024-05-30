import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Components
import NoBeneficiariesMessage from '../molecules/NoBeneficiariesMessage'
import BeneficiariesListHeader from '../organisms/BeneficiariesListHeader'
import BeneficiarGridItem from '../molecules/BeneficiarGridItem'
import BeneficiarListItem from '../molecules/BeneficiarListItem'
import TabScreenWrapper from '../organisms/TabScreenWrapper'

// Navigation
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

type BeneficiariesListScreenProps = {
    navigation: NativeStackNavigationProp<BeneficiariesStackParamList, "BeneficiariesList">,
    beneficiaries: Beneficiary[];
    onDeleteBeneficiary: (id: number) => void;
    onEditBeneficiary: (beneficiary: Beneficiary) => void;
    onShowTransactions: (beneficiary: Beneficiary) => void
}

const BeneficiariesListScreen = ({ navigation, beneficiaries, onDeleteBeneficiary, onEditBeneficiary, onShowTransactions }: BeneficiariesListScreenProps) => {

    const [isSelectedStyleGrid, setIsSelectedStyleGrid] = useState(true)

    const handleOpenBeneficiaryForm = () => {
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
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
            prevOpenedRow.close();
        }
        prevOpenedRow = row[index];
    };

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
        screenContent = <NoBeneficiariesMessage openForm={handleOpenBeneficiaryForm} />
    } else {
        screenContent = <View style={styles.screenContent}>
            {isSelectedStyleGrid &&
                <FlatList
                    contentContainerStyle={styles.beneficiariesGridList}
                    data={beneficiaries}
                    numColumns={4}
                    renderItem={(item) =>
                        <BeneficiarGridItem image={item.item.image} firstName={item.item.firstName} onShowTransactions={() => onShowTransactions(item.item)} />
                    }
                />
            }
            {!isSelectedStyleGrid &&
                <FlatList
                    contentContainerStyle={styles.beneficiariesList}
                    data={beneficiaries}
                    renderItem={(item) =>
                        <BeneficiarListItem
                            onShowTransactions={() => onShowTransactions(item.item)} beneficiaryItem={item} onDelete={onDeleteBeneficiaryHandler} onEdit={onEditBeneficiaryHandler} onCloseRow={closeRow} row={row} />
                    }
                />
            }
        </View>
    }

    return (
        <TabScreenWrapper showNotificationButton={false} onBack={() => { }} showTabHeader={true} style={styles.beneficiariesListContainer} isStatusBarTransparent={false}>
            <BeneficiariesListHeader isSelectedStyleGrid={isSelectedStyleGrid} setListStyle={() => setIsSelectedStyleGrid(false)} setGridStyle={() => setIsSelectedStyleGrid(true)} openForm={handleOpenBeneficiaryForm} />
            {screenContent}
        </TabScreenWrapper>
    )
}

export default BeneficiariesListScreen

const styles = StyleSheet.create({
    beneficiariesListContainer: {
        paddingHorizontal: 25,
        paddingVertical: 16,
        flex: 1,
        
    },
    screenContent: {
        flex: 1,
        marginTop: 20,
    },
    beneficiariesGridList: {
        rowGap: 8,
        justifyContent: "center",
        padding: 1
    },
    beneficiariesList: {
        rowGap: 10,
        paddingVertical: 5,
    }
})