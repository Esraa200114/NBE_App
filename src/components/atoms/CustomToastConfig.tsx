import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';

const CustomToast = ({ text1, text1Style, props }: ToastConfigParams<any>) => (
    <View style={[styles.customToast, { backgroundColor: props.backgroundColor }]}>
        <Text style={text1Style}>{text1}</Text>
    </View>
);

const styles = StyleSheet.create({
    customToast: {
        width: '90%',
        margin: 25,
        padding: 14,
        borderRadius: 10,
    },
});

const customToastConfig = {
    customToast: (props: ToastConfigParams<any>) => <CustomToast {...props} />,
};

export default customToastConfig;
