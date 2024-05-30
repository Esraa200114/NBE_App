import React, { ReactNode } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

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