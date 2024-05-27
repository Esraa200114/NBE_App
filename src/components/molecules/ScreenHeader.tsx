import React, { PropsWithChildren, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type ScreenHeaderProps = PropsWithChildren<{
    children: ReactNode,
    flexDirection: "row" | "row-reverse"
}>

const ScreenHeader = ({ children, flexDirection }: ScreenHeaderProps) => {

    return (
        <View style={[styles.screenHeaderContainer, { flexDirection }]} >
            {children}
        </View>
    )
}

export default ScreenHeader

const styles = StyleSheet.create({
    screenHeaderContainer: {
        marginTop: 16,
        justifyContent: "space-between"
    }
})