import React from 'react'

// Components
import { Marker } from 'react-native-maps'
import PropBasedIcon from '../atoms/PropBasedIcon'

// Icons
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

// Colors
import { Colors } from '../../../constants/Colors'

type MapParkerProps = {
    latitude: number,
    longitude: number,
    title: string,
}

const MapMarker = ({ latitude, longitude, title }: MapParkerProps) => {
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
