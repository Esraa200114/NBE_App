import React, { ReactNode } from 'react'
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native'

type BackgroundImageContainerProps = {
    children: ReactNode,
    image: any
}

const BackgroundImageContainer = ({ children, image }: BackgroundImageContainerProps) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle={"light-content"}/>
            <ImageBackground source={image} resizeMode='cover' style={styles.container}>
                {children}
            </ImageBackground>
        </View>

    )
}

export default BackgroundImageContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})