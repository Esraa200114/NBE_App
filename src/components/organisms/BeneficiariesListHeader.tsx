import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AddBeneficiariesButton from '../molecules/AddBeneficiariesButton'
import BeneficiariesListStyleButtons from './BeneficiariesListStyleButtons'

type BeneficiariesListHeaderProps = {
    isSelectedStyleGrid: boolean,
    setListStyle: () => void,
    setGridStyle: () => void
}

const BeneficiariesListHeader = ({isSelectedStyleGrid, setListStyle, setGridStyle}: BeneficiariesListHeaderProps) => {

    return (
        <View style={styles.beneficiariesListHeader}>
            <Text style={styles.beneficiariesListHeading}>
                Beneficiaries
            </Text>
            <View style={styles.beneficiariesListContent}>
                <BeneficiariesListStyleButtons isSelectedStyleGrid={isSelectedStyleGrid} setGridStyle={setGridStyle} setListStyle={setListStyle}/>
                <AddBeneficiariesButton textColor={Colors.ForestGreen} bgColor={Colors.PureWhite}/>
            </View>
        </View>
    )
}

export default BeneficiariesListHeader

const styles = StyleSheet.create({
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
    beneficiariesListContent: {
        flexDirection: "row", 
        columnGap: 8
    }
})