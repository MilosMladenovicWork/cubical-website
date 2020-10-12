import React from 'react'
import {Map, Marker, TileLayer} from 'react-leaflet'
import {icon} from 'leaflet'

import styles from './map.module.scss'
import iconUrl from '../../img/location.svg'

const CubicalMap = ({coords, zoom}) => {
    return(
        <div className={styles.map}>
            <Map center={coords} zoom={zoom}>
                <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                {
                    typeof window != 'undefined' &&
                        <Marker position={coords} icon={icon({iconUrl, iconSize: [50, 50]})}/>
                }
            </Map>
        </div>
    )
}

export default CubicalMap