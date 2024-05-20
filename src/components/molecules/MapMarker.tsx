import React from 'react'

// Components
import { Marker } from 'react-native-maps'
import PropBasedIcon from '../atoms/PropBasedIcon'

// Icons related imports
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

// Colors related imports
import { Colors } from '../../../constants/Colors'

type MapParkerProps = {
    latitude: number,
    longitude: number,
    title: string,
    index: number
}

const MapMarker = ({ latitude, longitude, title, index }: MapParkerProps) => {
    return (
        <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            title={title}
            description={"ATM"}
        >
            <PropBasedIcon color={Colors.ForestGreen} component={MaterialIcon} name='location-pin' size={36} />
        </Marker>
    )
}

export default MapMarker
