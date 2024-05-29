import React, { useContext } from 'react';
import { Modal, View, Text, StyleSheet, StatusBar } from 'react-native';

import { Colors } from '../../../constants/Colors';

import { ThemeContext } from '../../context/ThemeContext';

import AppButton from '../atoms/AppButton';
import BorderedAppButton from '../atoms/BorderedAppButton';

type CustomAlertProps = {
    visible: boolean,
    title: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void
}

const CustomAlert = ({ visible, title, message, onConfirm, onCancel }: CustomAlertProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onCancel}
        >
            <StatusBar translucent backgroundColor="rgba(28, 36, 55, 0.77)" />
            <View style={styles.centeredView}>
                <View style={{
                    ...styles.modalView, backgroundColor: activeColors.PureWhite,
                }}>
                    <Text style={{ ...styles.modalTitle, color: activeColors.DeepInk }}>{title}</Text>
                    <Text style={{...styles.modalMessage, 
                        color: activeColors.SlateGrey,
                    }}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        <BorderedAppButton bgColor={activeColors.PureWhite} disabled={false} onPress={onCancel} title='No' titleColor={activeColors.CrimsonRed} borderColor={activeColors.CrimsonRed} width={"40%"} />
                        <AppButton bgColor={activeColors.ForestGreen} disabled={false} onPress={onConfirm} title='Yes' titleColor={activeColors.PureWhite} width={"55%"} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(28, 36, 55, 0.77)",
        paddingHorizontal: 25
    },
    modalView: {
        width: "100%",
        borderRadius: 30,
        padding: 20,
    },
    modalTitle: {
        fontFamily: "Roboto Bold",
        fontSize: 20,
        lineHeight: 23.44,
        marginTop: 10,
        marginBottom: 6
    },
    modalMessage: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
});

export default CustomAlert;