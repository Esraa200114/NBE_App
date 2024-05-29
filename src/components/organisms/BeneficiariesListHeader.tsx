import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AddBeneficiariesButton from '../molecules/AddBeneficiariesButton'
import BeneficiariesListStyleButtons from './BeneficiariesListStyleButtons'
import BoldTitle from '../atoms/BoldTitle'

// Theme Context
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
            <BoldTitle title='Beneficiaries' color={activeColors.DeepInk} />
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
    beneficiariesListContent: {
        flexDirection: "row",
        columnGap: 8
    }
})