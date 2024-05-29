import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Components
import TransferInfoForm from '../organisms/TransferInfoForm';
import TabScreenWrapper from '../organisms/TabScreenWrapper';

// Navigation
import { TransferStackParamList } from '../../navigation/TransferStackNavigator';
import { BottomTabsParamList } from '../../navigation/BottomTabsNavigator';

type TransferInfoScreenProps = {
    navigation: NativeStackNavigationProp<TransferStackParamList, 'TransferInfo'>;
};

type TransferInfoScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<TransferStackParamList, 'TransferInfo'>,
    BottomTabNavigationProp<BottomTabsParamList>
>;

const TransferInfoScreen = ({ navigation }: TransferInfoScreenProps) => {

    const tabNavigation = useNavigation<TransferInfoScreenNavigationProp>();

    return (
        <TabScreenWrapper
            isStatusBarTransparent={false}
            style={styles.transferInfoContainer}
            showTabHeader={false}
            showNotificationButton={false}
            onBack={() => tabNavigation.navigate('Home')}
        >
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TransferInfoForm navigation={navigation} />
            </KeyboardAvoidingView>
        </TabScreenWrapper>
    );
};


export default TransferInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    transferInfoContainer: {
        paddingHorizontal: 25,
        flex: 1,
    },
});
