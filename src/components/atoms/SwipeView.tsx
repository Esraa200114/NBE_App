import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import PropBasedIcon from './PropBasedIcon'
import { Colors } from '../../../constants/Colors'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

type ViewProps = {
    iconName: string,
    bgColor: string
}

interface DeleteBeneficiaryProps extends ViewProps {
    onDeleteBeneficiary: () => void;
    onEditBeneficiary?: never;
}

interface EditBeneficiaryProps extends ViewProps {
    onDeleteBeneficiary?: never;
    onEditBeneficiary: () => void;
}

type SwipeViewProps = DeleteBeneficiaryProps | EditBeneficiaryProps;

const SwipeView: React.FC<SwipeViewProps> = (props) => {

    const { iconName, bgColor, onDeleteBeneficiary, onEditBeneficiary } = props;

    const onPress = () => {
        if (onDeleteBeneficiary) {
            onDeleteBeneficiary();
        } else {
            onEditBeneficiary();
        }
    };

    return (
        <TouchableOpacity style={[styles.swipeViewContainer, { backgroundColor: bgColor }]} onPress={onPress}>
            <PropBasedIcon color={Colors.PureWhite} component={FontAwesome5Icon} size={22} name={iconName} />
        </TouchableOpacity>
    )
}

export default SwipeView

const styles = StyleSheet.create({
    swipeViewContainer: {
        height: "95%",
        width: 100,
        alignItems: "center",
        justifyContent: "center",
    }
})
