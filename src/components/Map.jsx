import { useState } from 'react';
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import LocateButton from './LocateButton'
import Menu from './Menu'
import SearchBox from './SearchBox';
import ParkingMarkers from './ParkingMarkers';


export default function Map() {
  const [center, setCenter] = useState({
    lat: 25.026312001265776, lng: 121.5435894427204
  })
  const [zoomLevel, setZoomLevel] = useState(15)
  const markerIcon = new L.Icon({
    iconUrl: require('../assets/marker.png'),
    iconSize: [24, 36],
    iconAnchor: [12, 36], //align when zoom in out
    popupAnchor: [0, -46]
  })

  return (
    <>
      <Menu />
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoomLevel}
        scrollWheelZoom={true}
        zoomControl={false}
        maxZoom="19"
        className="map__container" >
        <TileLayer
          attribution='&copy; <a href="https://www. openstreetmap.org/copyright">OpenStreetMap Contributors</ a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <SearchBox position="topleft" />
        <LocateButton center={center} />
        <Marker position={[center.lat, center.lng]} icon={markerIcon}>
          <Popup>
            <b>當前位置</b>
          </Popup>
        </Marker>
        <ParkingMarkers />
      </MapContainer>
    </>
  )
}