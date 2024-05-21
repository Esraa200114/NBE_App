import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'

type BeneficiarGridItemProps = {
    image: any,
    firstName: string
}

const BeneficiarGridItem = ({ image, firstName }: BeneficiarGridItemProps) => {

    return (
        <View style={styles.beneficiarGridItemContainer}>
            <Image source={{ uri: image }} style={styles.beneficiarGridItemImage} />
            <Text style={styles.beneficiarGridItemName}>{firstName}</Text>
        </View>
    )
}

export default BeneficiarGridItem

const styles = StyleSheet.create({
    beneficiarGridItemContainer: {
        borderRadius: 18,
        backgroundColor: Colors.PureWhite,
        shadowColor: Colors.MidnightBlack,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 14,
        width: "23%",
        marginHorizontal: 3
    },
    beneficiarGridItemImage: {
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 18,
        elevation: 10,
        width: 33.35,
        height: 33.35
    },
    beneficiarGridItemName: {
        fontFamily: "Roboto Regular",
        fontSize: 14,
        lineHeight: 16.41,
        color: Colors.DeepInk,
        marginTop: 8,
    }
})