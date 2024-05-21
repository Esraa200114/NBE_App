import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PropBasedIcon from './PropBasedIcon'
import { Colors } from '../../../constants/Colors'
import FeatherIcon from "react-native-vector-icons/Feather"
import * as ImagePicker from 'react-native-image-picker';

type BeneficiaryImagePickerProps = {
    image: string
    onImageChange: (value: string) => void
}

const BeneficiarImagePicker = ({ image, onImageChange }: BeneficiaryImagePickerProps) => {

    const handleOpenImageGallery = () => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: true,
            },
            (response: any) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.assets && response.assets.length > 0) {
                    console.log(response.assets[0].uri);
                    onImageChange(response.assets[0].uri)
                }
            }
        )
    }

    return (
        <TouchableOpacity style={styles.addImageIconContainer} onPress={handleOpenImageGallery}>
            {!image && (
                <PropBasedIcon color={Colors.ForestGreen} component={FeatherIcon} name='camera' size={40} />
            )}
            {image && (
                <Image
                    source={{ uri: image }}
                    style={styles.beneficiarImage}
                />
            )}
        </TouchableOpacity>
    )
}

export default BeneficiarImagePicker

const styles = StyleSheet.create({
    addImageIconContainer: {
        width: 138,
        height: 138,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: Colors.PureWhite,
        borderRadius: 30,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: Colors.MidnightBlack,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: 4
    },
    beneficiarImage: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        resizeMode: "cover"
    }
})