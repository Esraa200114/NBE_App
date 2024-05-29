import React from 'react';
import { StyleSheet } from 'react-native';

// Components
import ATMsMap from '../organisms/ATMsMap';

// Navigation
import TabScreenWrapper from '../organisms/TabScreenWrapper';

const ATMsScreen = () => {

    return (
        <TabScreenWrapper style={styles.screenContent} showTabHeader={true} showNotificationButton={false} onBack={() => { }} isStatusBarTransparent={true}>
            <ATMsMap />
        </TabScreenWrapper>
    )
}

export default ATMsScreen;

const styles = StyleSheet.create({
    screenContent: {
        paddingHorizontal: 25,
        paddingVertical: 16,
        flex: 1
    },
});
