import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

// Components
import ListStyleButton from '../atoms/ListStyleButton'
import BeneficiariesButtonsWrapper from '../molecules/BeneficiariesButtonsWrapper'

// Colors
import { Colors } from '../../../constants/Colors'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type BeneficiariesListStyleButtonsProps = {
    isSelectedStyleGrid: boolean,
    setListStyle: () => void,
    setGridStyle: () => void
}

const BeneficiariesListStyleButtons = ({ isSelectedStyleGrid, setListStyle, setGridStyle }: BeneficiariesListStyleButtonsProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]
    
    return (
        <BeneficiariesButtonsWrapper style={[styles.beneficiariesListButtonsWrapper, {backgroundColor: activeColors.PureWhite}]}>
            <ListStyleButton iconName='th-large' isSelected={isSelectedStyleGrid} onPress={setGridStyle} />
            <ListStyleButton iconName='list' isSelected={!isSelectedStyleGrid} onPress={setListStyle} />
        </BeneficiariesButtonsWrapper>
    )
}

export default BeneficiariesListStyleButtons

const styles = StyleSheet.create({
    beneficiariesListButtonsWrapper: {
        columnGap: 8,
        alignItems: "center",
        justifyContent: "space-between",
    }
})