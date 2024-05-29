import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { DraxProvider } from 'react-native-drax';

// Data
import { creditCardsList } from '../../../constants/CreditCards';

// Colors
import { Colors } from '../../../constants/Colors';

// Components
import AppButton from '../atoms/AppButton';
import FingerPrintCard from '../atoms/FingerPrintCard';
import MissionStatusModal from '../molecules/MissionStatusModal';
import TabScreenWrapper from '../organisms/TabScreenWrapper';
import DraggableCreditCardList from '../organisms/DraggableCreditCardList';
import CreditCardDropContainer from '../molecules/CreditCardDropContainer';

// Theme Context
import { ThemeContext } from '../../context/ThemeContext';

export const draggableCreditCards = creditCardsList.map(obj => ({ ...obj, onCardPress: () => { } }))

const AirPayScreen = () => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [visible, setVisible] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [isCardDropped, setIsCardDropped] = useState(false)

    const isTextComponent = (element: React.ReactNode) => {
        if (React.isValidElement(element) && element.type === Text) {
            setIsCardDropped(true)
        }
    };

    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <DraxProvider>
            <TabScreenWrapper isStatusBarTransparent={false} onBack={() => { }} showNotificationButton={false} showTabHeader={true} style={styles.container}>
                {isSuccess ?
                    <MissionStatusModal title='Mission Complete' body='Your payment to IKEA was successful' image={require("../../../assets/images/payment-success.png")} isMissionSuccess={true} onClose={handleCloseModal} visible={visible} buttonTitle='Done' isTransfer={false} />
                    :
                    <MissionStatusModal title='Ooops...' body='Your payment didn’t go through' image={require("../../../assets/images/payment-failure.png")} isMissionSuccess={false} onClose={handleCloseModal} visible={visible} buttonTitle='Try Again' isTransfer={false} />
                }
                <DraggableCreditCardList />
                <CreditCardDropContainer checkForDroppedCard={isTextComponent} setSuccess={setSuccess} />
                <View style={[styles.payNowButtonContainer, styles.positionedAbsolute]}>
                    <AppButton disabled={!isCardDropped} onPress={() => { setVisible(true) }} title='Pay Now' bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
                    <View style={[styles.fingerPrintContainer, styles.positionedAbsolute]}>
                        <FingerPrintCard size={17.92} radius={8} padding={4} />
                    </View>
                </View>
            </TabScreenWrapper>
        </DraxProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 26,
        paddingVertical: 16,
        flex: 1
    },
    payNowButtonContainer: {
        flexDirection: "row",
        marginHorizontal: 25,
        bottom: 0,
        left: 0,
        right: 0,
        marginVertical: 20
    },
    fingerPrintContainer: {
        right: 10,
        bottom: 10,
        top: 10
    },
    positionedAbsolute: {
        position: "absolute",
    }
});

export default AirPayScreen;