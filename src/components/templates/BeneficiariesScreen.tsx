import React, { useState } from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import TabHeader from '../organisms/TabHeader'
import BeneficiariesListStyleButtons from '../organisms/BeneficiariesListStyleButtons'

// Navigation
import { DrawerActions, useNavigation } from '@react-navigation/native'
import AddBeneficiariesButton from '../molecules/AddBeneficiariesButton'
import BeneficiariesListHeader from '../organisms/BeneficiariesListHeader'
import { beneficiariesList } from '../../../constants/Beneficiaries'
import BeneficiarGridItem from '../molecules/BeneficiarGridItem'
import BeneficiarListItem from '../molecules/BeneficiarListItem'
import NoBeneficiariesMessage from '../molecules/NoBeneficiariesMessage'

const BeneficiariesScreen = () => {

    const navigation = useNavigation();
    const [isSelectedStyleGrid, setIsSelectedStyleGrid] = useState(true)

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={Colors.MistyLavender} barStyle={"dark-content"} />
            <SafeAreaView style={styles.screenContent}>
                <View style={styles.screenHeader}>
                    <TabHeader onPress={(() => navigation.dispatch(DrawerActions.openDrawer()))} />
                    <BeneficiariesListHeader isSelectedStyleGrid={isSelectedStyleGrid} setListStyle={() => setIsSelectedStyleGrid(false)} setGridStyle={() => setIsSelectedStyleGrid(true)} />
                </View>

                <NoBeneficiariesMessage />
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

export default BeneficiariesScreen

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
