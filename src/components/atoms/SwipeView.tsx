import { StyleSheet, TouchableOpacity } from 'react-native'
import PropBasedIcon from './PropBasedIcon'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { Beneficiary } from '../../navigation/BeneficiariesStackNavigator'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Colors } from '../../../constants/Colors'

type ViewProps = {
    iconName: string,
    bgColor: string,
    iconColor: string
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
    
    const { iconName, bgColor, onDeleteBeneficiary, onEditBeneficiary, iconColor } = props;

    const onPress = () => {
        if (onDeleteBeneficiary) {
            onDeleteBeneficiary();
        } else {
            onEditBeneficiary();
        }
    };

    return (
        <TouchableOpacity style={[styles.swipeViewContainer, { backgroundColor: bgColor }]} onPress={onPress}>
            <PropBasedIcon color={iconColor} component={FontAwesome5Icon} size={22} name={iconName} />
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
