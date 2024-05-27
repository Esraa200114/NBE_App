import { Image, Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import AppButton from '../atoms/AppButton'
import { TransferStackParamList } from '../../navigation/TransferStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ThemeContext } from '../../context/ThemeContext'

type MissionStatusModalProps = {
    visible: boolean,
    onClose: () => void,
    isMissionSuccess: boolean,
    title: string,
    body: string,
    image: any,
    buttonTitle: string,
    isTransfer: boolean
}

const MissionStatusModal = ({ visible, onClose, isMissionSuccess, title, body, image, buttonTitle, isTransfer }: MissionStatusModalProps) => {

    const { theme } = React.useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <React.Fragment>
            <Modal transparent visible={visible}>
                <StatusBar translucent backgroundColor="rgba(28, 36, 55, 0.77)" />
                <View style={styles.modalBackground}>
                    <View style={[styles.modalContainer, {
                        backgroundColor: activeColors.PureWhite,
                    }]}>
                        <Image source={image} />
                        <Text style={[styles.modalTitle, {
                            color: activeColors.DeepInk,
                        }, { color: isMissionSuccess ? activeColors.ForestGreen : activeColors.CrimsonRed }]}>{title}</Text>
                        <Text style={[styles.modalBody, {
                            color: activeColors.SlateGrey,
                        }]}>{body}</Text>
                        {!isTransfer && <Text style={[styles.amountPaid, {
                            color: activeColors.DeepInk,
                        }]}>$5,542.00</Text>}
                        {isMissionSuccess && <View style={styles.positiveModalButton}><AppButton title={buttonTitle} onPress={onClose} disabled={false} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} /></View>}
                        {!isMissionSuccess &&
                            <View style={styles.modalButtons}>
                                <View style={{ width: "40%", borderColor: activeColors.CrimsonRed, borderWidth: 1, borderRadius: 10 }}>
                                    <AppButton title="Cancel" onPress={onClose} disabled={false} bgColor={activeColors.PureWhite} titleColor={activeColors.CrimsonRed} />
                                </View>
                                <View style={{ width: "50%" }}>
                                    <AppButton title={buttonTitle} onPress={onClose} disabled={false} bgColor={activeColors.ForestGreen} titleColor={activeColors.PureWhite} />
                                </View>
                            </View>}
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    )
}

export default MissionStatusModal

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(28, 36, 55, 0.77)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25
    },
    modalContainer: {
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    modalTitle: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        marginTop: 10,
        marginBottom: 6
    },
    modalBody: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        textAlign: "center",
    },
    amountPaid: {
        fontFamily: "Roboto Bold",
        fontSize: 40,
        lineHeight: 46.88,
        textAlign: "center",
        marginVertical: 10
    },
    positiveModalButton: {
        marginTop: 20,
        width: "100%"
    },
    modalButtons: {
        flexDirection: "row",
        columnGap: 20,
        marginTop: 10
    }
})
