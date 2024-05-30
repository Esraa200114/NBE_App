import React from 'react'
import { Image, Modal, StatusBar, StyleSheet, Text, View } from 'react-native'

// Colors
import { Colors } from '../../../constants/Colors'

// Components
import AppButton from '../atoms/AppButton'

// Theme Context
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
                <View style={[styles.modalBackground, styles.centeredContent]}>
                    <View style={[styles.modalContainer, styles.centeredContent, {
                        backgroundColor: activeColors.PureWhite,
                    }]}>
                        <Image source={image} />
                        <Text style={[styles.modalTitle, styles.boldFont, {
                            color: activeColors.DeepInk,
                        }, { color: isMissionSuccess ? activeColors.ForestGreen : activeColors.CrimsonRed }]}>{title}</Text>
                        <Text style={[styles.modalBody, styles.centeredText, {
                            color: activeColors.SlateGrey,
                        }]}>{body}</Text>
                        {!isTransfer && <Text style={[styles.amountPaid, styles.centeredText, styles.boldFont, {
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
        paddingHorizontal: 25
    },
    centeredContent: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        borderRadius: 30,
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    modalTitle: {
        fontSize: 20,
        lineHeight: 23.44,
        marginTop: 10,
        marginBottom: 6
    },
    boldFont: {
        fontFamily: "Roboto Bold",
    },
    modalBody: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
    },
    amountPaid: {
        fontSize: 40,
        lineHeight: 46.88,
        marginVertical: 10
    },
    centeredText: {
        textAlign: "center",
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
