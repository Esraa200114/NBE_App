import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AddBeneficiariesButton from '../molecules/AddBeneficiariesButton'
import BeneficiariesListStyleButtons from './BeneficiariesListStyleButtons'
import { ThemeContext } from '../../context/ThemeContext'

type BeneficiariesListHeaderProps = {
    isSelectedStyleGrid: boolean,
    setListStyle: () => void,
    setGridStyle: () => void,
    openForm: () => void
}

const BeneficiariesListHeader = ({ isSelectedStyleGrid, setListStyle, setGridStyle, openForm }: BeneficiariesListHeaderProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]
    
    return (
        <View style={styles.beneficiariesListHeader}>
            <Text style={[styles.beneficiariesListHeading, { color: activeColors.DeepInk}]}>
                Beneficiaries
            </Text>
            <View style={styles.beneficiariesListContent}>
                <BeneficiariesListStyleButtons isSelectedStyleGrid={isSelectedStyleGrid} setGridStyle={setGridStyle} setListStyle={setListStyle} />
                <AddBeneficiariesButton textColor={activeColors.ForestGreen} bgColor={activeColors.PureWhite} onPress={openForm} />
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
    },
    beneficiariesListContent: {
        flexDirection: "row",
        columnGap: 8
    }
})