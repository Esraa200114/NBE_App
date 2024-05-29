import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DraxScrollView } from 'react-native-drax'

// Components
import BoldTitle from '../atoms/BoldTitle'
import DraggableCreditCard from './DraggableCreditCard'

// Theme Context
import { ThemeContext } from '../../context/ThemeContext'

// data
import { draggableCreditCards } from '../templates/AirPayScreen'

// Colors
import { Colors } from '../../../constants/Colors'

const DraggableCreditCardList = () => {

    const { theme } = React.useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    return (
        <View style={styles.draggableCreditCardListContainer}>
            <View style={styles.draggableCreditCardListTitle}>
                <BoldTitle title='Cards' color={activeColors.DeepInk} />
            </View>
            <DraxScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                style={styles.list}
                horizontal={true} >
                {draggableCreditCards.map((item, index) =>
                    <DraggableCreditCard key={index} card={item} index={index} />)
                }
            </DraxScrollView>
        </View>
    )
}

export default DraggableCreditCardList

const styles = StyleSheet.create({
    draggableCreditCardListContainer: {
        marginTop: 30,
        marginBottom: 10
    },
    draggableCreditCardListTitle: {
        marginBottom: 20,
    },
    listContainer: {
        columnGap: 10,
        height: 200,
    },
    list: {
        width: '100%',
        height: 230
    }
})