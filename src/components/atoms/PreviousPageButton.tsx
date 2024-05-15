import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import IconGenerator from './IconGenerator'

import { Colors } from '../../../constants/Colors'

type PreviousPageButtonProps = {
    navigation: any
}

const PreviousPageButton = ({ navigation }: PreviousPageButtonProps) => {
    return (
        <View style={styles.previousPageButtonContainer}>
            <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? Colors.DarkForestGreen
                        : Colors.ForestGreen,
                },
                styles.pressable,
            ]}>
                <IconGenerator type={'back-arrow'} />
            </Pressable>
        </View>
    )
}

export default PreviousPageButton

const styles = StyleSheet.create({
    previousPageButtonContainer: {
        width: 40,
        height: 40,
        backgroundColor: Colors.ForestGreen,
        borderRadius: 10,
    },
    pressable: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
})