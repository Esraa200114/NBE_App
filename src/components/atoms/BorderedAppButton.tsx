import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DimensionValue } from 'react-native';

// Components
import AppButton from './AppButton';

type BorderedAppButtonProps = {
    title: string;
    onPress: () => void;
    disabled: boolean;
    bgColor: string;
    titleColor: string;
    width?: DimensionValue;
    borderColor: string
};

const BorderedAppButton = ({title, onPress, disabled, bgColor, titleColor, width, borderColor}: BorderedAppButtonProps) => {

    return (
        <View style={{...styles.borderedContainer, borderColor: borderColor, width: width}}>
            <AppButton bgColor={bgColor} disabled={disabled} onPress={onPress} title={title} titleColor={titleColor} />
        </View>
    )
}

export default BorderedAppButton

const styles = StyleSheet.create({
    borderedContainer: {
        borderWidth: 1,
        borderRadius: 12.5
    }
})