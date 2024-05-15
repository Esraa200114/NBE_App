import React from 'react';
import SplashScreen from '../templates/SplashScreen'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { View } from 'react-native';
import { Colors } from '../../../constants/Colors';

type SplashPageProps = NativeStackScreenProps<RootStackParamList, "Splash">

const SplashPage = ({ navigation }: SplashPageProps) => {
    return (<View style={{backgroundColor: Colors.MistyLavender, flex: 1}}>
        <SplashScreen navigation={navigation} />
    </View>
    )
}

export default SplashPage;
