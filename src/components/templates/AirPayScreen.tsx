import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';

import { DraxProvider, DraxScrollView, DraxView } from 'react-native-drax';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { creditCardsList } from '../../../constants/CreditCards';
import { Colors } from '../../../constants/Colors';
import CreditCard from '../organisms/CreditCard';
import AppButton from '../atoms/AppButton';
import FingerPrintCard from '../atoms/FingerPrintCard';
import TabHeader from '../organisms/TabHeader';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MissionStatusModal from '../molecules/MissionStatusModal';
import { useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const AirPayScreen = () => {

    const { theme } = React.useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const [visible, setVisible] = useState(false)

    const [received, setReceived] = React.useState<React.JSX.Element>(<Text style={styles.dragDropText}>Touch & hold a card then drag it
        to this box</Text>);

    const removeChosenCard = () => {
        setReceived(<Text style={styles.dragDropText}>Touch & hold a card then drag it
            to this box</Text>)
    }

    const navigation = useNavigation();
    const draggableCreditCards = creditCardsList.map(obj => ({ ...obj, onCardPress: () => { } }))

    const isTextComponent = (element: React.ReactNode) => {
        return React.isValidElement(element) && element.type === Text;
    };

    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <DraxProvider>
            <StatusBar backgroundColor={activeColors.MistyLavender} barStyle={theme.mode === "dark" ? "light-content" : "dark-content"} />
            <SafeAreaView style={[styles.container, {
                backgroundColor: activeColors.MistyLavender,
            }]}>
                <MissionStatusModal title='Mission Complete' body='Your payment to IKEA was successful' image={require("../../../assets/images/payment-success.png")} isMissionSuccess={true} onClose={handleCloseModal} visible={visible} buttonTitle='Done' isTransfer={false} />
                {/* <MissionStatusModal title='Ooops...' body='Your payment didn’t go through' image={require("../../../assets/images/payment-failure.png")} isMissionSuccess={false} onClose={handleCloseModal} visible={visible} buttonTitle='Try Again' isTransfer={false}/> */}
                <View style={{
                    paddingTop: 16,
                    paddingHorizontal: 25,
                }}>
                    <TabHeader onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

                </View>
                <View style={{ marginVertical: 26 }}>
                    <Text style={[styles.creditCardListHeader, {
                        color: activeColors.DeepInk,
                    }]}>Cards</Text>
                    <DraxScrollView
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ columnGap: 14, height: 200, paddingHorizontal: 4 }}
                        style={{ width: '90%', height: 230, marginHorizontal: 20 }}
                        horizontal={true} >
                        {draggableCreditCards.map((item, index) =>
                            <DraxView
                                key={index.toString()}
                                style={{
                                    width: 320,
                                    height: 196,
                                }}
                                dragPayload={item.cardColor}
                                longPressDelay={0}
                                hoverDragReleasedStyle={{ display: "none" }}
                                draggingStyle={{ opacity: 0.4 }}
                                hoverDraggingStyle={{ opacity: 0.4 }}
                            >
                                <CreditCard
                                    amount={item.cardAmount}
                                    backgroundColor={item.cardColor}
                                    number={item.cardNumber}
                                    onCardPress={item.onCardPress} />
                            </DraxView>)
                        }
                    </DraxScrollView>
                </View>

                <DraxView
                    style={[styles.centeredContent, styles.receivingZone, {
                        borderColor: activeColors.ForestGreen,
                    }]}
                    receivingStyle={[styles.receiving, {borderColor: activeColors.ForestGreen,}]}
                    renderContent={({ viewState }) => {
                        return (
                            <>
                                {received}
                            </>
                        );
                    }}
                    onReceiveDragDrop={(event) => {
                        let cardDragged = draggableCreditCards.find((card) => card.cardColor === event.dragged.payload)
                        if (cardDragged) {
                            setReceived(<CreditCard amount={cardDragged.cardAmount} backgroundColor={cardDragged.cardColor} number={cardDragged.cardNumber} onCardPress={cardDragged.onCardPress} />);
                        }
                    }}
                />

                <View style={styles.payNowButtonContainer}>
                    <AppButton disabled={isTextComponent(received)} onPress={() => { setVisible(true); removeChosenCard(); }} title='Pay Now' bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
                    <View style={{ position: "absolute", right: 10, bottom: 10, top: 10 }}>
                        <FingerPrintCard size={17.92} radius={8} padding={4} />
                    </View>
                </View>
            </SafeAreaView>

        </DraxProvider>
    );
}

const styles = StyleSheet.create({
    creditCardListHeader: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        marginBottom: 26,
        marginHorizontal: 25
    },
    dragDropText: {
        fontFamily: "Roboto Medium",
        fontSize: 20,
        lineHeight: 23.44,
        textAlign: "center",
        color: "rgba(0, 114, 54, 0.77)",
        marginHorizontal: 25
    },
    container: {
        flex: 1
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    receivingZone: {
        height: 240,
        borderRadius: 27,
        borderWidth: 2,
        borderStyle: "dashed",
        marginHorizontal: 25,
    },
    receiving: {
        backgroundColor: "#00C97426",
        borderStyle: "solid",
    },
    payNowButtonContainer: {
        flexDirection: "row",
        marginHorizontal: 25,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginVertical: 25
    }
});

export default AirPayScreen;