import React from 'react'
import { StyleSheet, } from 'react-native'

// Map related imports
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { markersList } from '../../../constants/Markers';

// Components
import MapMarker from '../molecules/MapMarker';

const ATMsMap = () => {
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
                latitude: 30.070983333718413,
                longitude: 31.49133103764241,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            {markersList.map((marker, index) => <MapMarker key={index} latitude={marker.latitude} longitude={marker.longitude} title={marker.title} index={index} />)}
        </MapView>
    )
}

export default ATMsMap

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})