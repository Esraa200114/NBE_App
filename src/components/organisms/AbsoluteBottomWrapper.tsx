import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

type AbsoluteBottomWrapperProps = {
    children: ReactNode,
    style?: ViewStyle
}

const AbsoluteBottomWrapper = ({ children, style }: AbsoluteBottomWrapperProps) => {
    return (
        <View style={[styles.wrapper, style]}>
            {children}
        </View >
    )
}

export default AbsoluteBottomWrapper

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
})