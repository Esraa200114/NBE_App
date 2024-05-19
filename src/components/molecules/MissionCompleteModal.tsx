import { Image, Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import AppButton from '../atoms/AppButton'
import { TransferStackParamList } from '../../navigation/TransferStackNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type MissionCompleteModalProps = {
    visible: boolean,
    onClose: () => void,
}

const MissionCompleteModal = ({ visible, onClose }: MissionCompleteModalProps) => {
    return (
        <React.Fragment>
            <Modal transparent visible={visible}>
                <StatusBar translucent backgroundColor="rgba(28, 36, 55, 0.77)" />
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Image source={require("../../../assets/images/mission-complete.png")} />
                        <Text style={styles.modalTitle}>Mission Complete</Text>
                        <Text style={styles.modalBody}>Transfer to Jasmine Robert was successful</Text>
                        <AppButton title='Finish' onPress={onClose} disabled={false} bgColor={Colors.ForestGreen} titleColor={Colors.PureWhite}/>
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    )
}

export default MissionCompleteModal

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(28, 36, 55, 0.77)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25
    },
    modalContainer: {
        backgroundColor: Colors.PureWhite,
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
        color: Colors.DeepInk,
        marginTop: 10,
        marginBottom: 6
    },
    modalBody: {
        fontFamily: "Roboto Regular",
        fontSize: 16,
        lineHeight: 18.75,
        textAlign: "center",
        color: Colors.SlateGrey,
        marginBottom: 20
    }
})
