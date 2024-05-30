import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

// Components
import ListHeader from '../molecules/ListHeader'
import TransactionHistoryItem from '../molecules/TransactionHistoryItem'
import ListSeparator from '../atoms/ListSeparator'

const TransactionsHistory = () => {

    const transactionsList = [
        {
            image: require("../../../assets/images/carrefour.png"),
            date: "15-12-2021",
            amount: "$250.21",
            title: "Carrefour",
            isLogo: true
        },
        {
            image: require("../../../assets/images/amazon.png"),
            date: "02-12-2021",
            amount: "$3004.21",
            title: "Amazon",
            isLogo: true
        },
        {
            image: require("../../../assets/images/jumia.png"),
            date: "28-11-2021",
            amount: "$2146.63",
            title: "Jumia",
            isLogo: true
        },
        {
            image: require("../../../assets/images/hala.png"),
            date: "12-11-2021",
            amount: "$5140.00",
            title: "Hala Slimen",
            isLogo: false
        },
        {
            image: require("../../../assets/images/ikea.png"),
            date: "03-11-2021",
            amount: "$12,547.96",
            title: "IKEA",
            isLogo: true
        },
        {
            image: require("../../../assets/images/carrefour.png"),
            date: "15-12-2021",
            amount: "$250.21",
            title: "Carrefour",
            isLogo: true
        },
    ]

    return (
        <View style={styles.transactionHistoryContainer}>
            <ListHeader title='History' />
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.transactionHistoryFlatList}
                ItemSeparatorComponent={ListSeparator}
                data={transactionsList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <TransactionHistoryItem image={item.image} date={item.date} amount={item.amount} title={item.title} isLogo={item.isLogo} />}
            />
        </View>
    )
}

export default TransactionsHistory

const styles = StyleSheet.create({
    transactionHistoryContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    transactionHistoryFlatList: {
        overflow: 'hidden'
    },
})