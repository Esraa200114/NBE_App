import React, { useContext } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'react-native-image-picker';

// Components
import PropBasedIcon from './PropBasedIcon'

// Colors
import { Colors } from '../../../constants/Colors'

// Icons
import FeatherIcon from "react-native-vector-icons/Feather"

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

type BeneficiaryImagePickerProps = {
    image: string
    onImageChange: (value: string) => void
}

const BeneficiarImagePicker = ({ image, onImageChange }: BeneficiaryImagePickerProps) => {

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

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
        <TouchableOpacity style={[styles.addImageIconContainer, {
            backgroundColor: activeColors.PureWhite, shadowColor: activeColors.MidnightBlack,
        }]} onPress={handleOpenImageGallery}>
            {!image && (
                <PropBasedIcon color={activeColors.ForestGreen} component={FeatherIcon} name='camera' size={40} />
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
        borderRadius: 30,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 1,
        },
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