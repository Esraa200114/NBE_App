import { StyleSheet } from 'react-native'
import React from 'react'
import SuccessScreen from '../templates/SuccessScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type SuccessPageProps = NativeStackScreenProps<RootStackParamList, "Success">

const SuccessPage = ({ navigation }: SuccessPageProps) => {
    return (
        <SuccessScreen navigation={navigation}/>
    )
}

export default SuccessPage

const styles = StyleSheet.create({})