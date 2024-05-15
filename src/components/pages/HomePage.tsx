import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import HomeScreen from '../templates/HomeScreen';

// type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomePage = (/*{ route, navigation }: HomePageProps*/) => {

    // const { userName } = route.params;

    return (
        <HomeScreen /*navigation={navigation} userName={userName}*//>
    );
}

export default HomePage;

// Remove the duplicated styles declaration for HomePage.
