import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

// Components
import SendMoneyContactItem from '../molecules/SendMoneyContactItem';
import ListHeader from '../molecules/ListHeader';

const SendMoneyContacts = () => {
    const sendMoneyContactsItemList = [
        {
            name: "Hala",
            image: require("../../../assets/images/hala.png")
        },
        {
            name: "Ayman",
            image: require("../../../assets/images/ayman.png")
        },
        {
            name: "Alex",
            image: require("../../../assets/images/alex.png")
        },
        {
            name: "Soha",
            image: require("../../../assets/images/soha.png")
        },
        {
            name: "Hala",
            image: require("../../../assets/images/hala.png")
        }
    ];

    return (
        <View style={styles.sendMoneyContactsContainer}>
            <ListHeader title='Send money' />
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.sendMoneyContactsFlatList}
                horizontal={true}
                data={sendMoneyContactsItemList}
                renderItem={({ item }) => <SendMoneyContactItem image={item.image} name={item.name} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default SendMoneyContacts;

const styles = StyleSheet.create({
    sendMoneyContactsContainer: {
        marginVertical: 14,
    },
    sendMoneyContactsFlatList: {
        height: 120,
        alignItems: 'center',
        justifyContent: "center"
    }
});


