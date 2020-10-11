import React from 'react'
import {Map as LeafletMap, Marker, TileLayer} from 'react-leaflet'
import {icon} from 'leaflet'

import styles from './map.module.scss'
import mapPin from '../../img/location.svg'

const Map = () => {
    return(
        <div className={styles.map}>
            <LeafletMap center={[46.195602, 6.148113]} zoom={15}>
                <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                <Marker position={[46.195602, 6.148113]} icon={icon({iconUrl: mapPin, iconSize: [50, 50]})}>
                </Marker>
            </LeafletMap>
        </div>
    )
}

export default Map