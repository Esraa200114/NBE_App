import { ListRenderItemInfo, } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'

import { Swipeable } from 'react-native-gesture-handler'
import SwipeView from '../atoms/SwipeView'
import { Beneficiary } from '../../navigation/BeneficiariesStackNavigator'
import BeneficiarListItemView from './BeneficiarListItemView'

type BeneficiarListItemProps = {
    beneficiaryItem: ListRenderItemInfo<Beneficiary>
    onDelete: (index: number, id: number) => void
    onEdit: (index: number, beneficiary: Beneficiary) => void;
    onCloseRow: (index: number) => void
    row: any,
    onShowTransactions: () => void
}

const BeneficiarListItem = ({ beneficiaryItem, onDelete, onEdit, onCloseRow, row, onShowTransactions }: BeneficiarListItemProps) => {

    console.log("id: ", beneficiaryItem.item.id)
    console.log("index: ", beneficiaryItem.index)

    return (
        <Swipeable
            renderRightActions={(progress, dragX) =>
                SwipeView({ bgColor: Colors.VividRed, iconName: "trash", onDeleteBeneficiary: () => onDelete(beneficiaryItem.index, beneficiaryItem.item.id) })
            }
            renderLeftActions={(progress, dragX) =>
                SwipeView({ bgColor: Colors.ForestGreen, iconName: "pen", onEditBeneficiary: () => onEdit(beneficiaryItem.index, beneficiaryItem.item) })
            }
            onSwipeableOpen={() => onCloseRow(beneficiaryItem.index)}
            ref={(ref) => (row[beneficiaryItem.index] = ref)}
        >
            <BeneficiarListItemView beneficiaryItem={beneficiaryItem.item} onShowTransactions={onShowTransactions}/>
        </Swipeable>
    )
}

export default BeneficiarListItem
