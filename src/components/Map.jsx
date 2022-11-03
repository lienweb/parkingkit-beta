import { useState } from 'react';
import '../stylesheets/stylesheet.css'
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
// import { useMap } from 'react-leaflet/hooks'



export default function Map(){
//   const [center, setCenter] = useState([{ 
//     lat: 25.026312001265776, lng: 121.5435894427204
// }])
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
    // <div >
      <MapContainer 
      center={[center.lat, center.lng]} 
      zoom={zoomLevel} 
      scrollWheelZoom={false} 
      zomControl={true}
      className="map__container" >
        <TileLayer
          attribution='&copy; <a href="https://www. openstreetmap.org/copyright">OpenStreetMap</ a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[center.lat, center.lng]} icon={markerIcon}>
          <Popup>
            <b>test</b>
          </Popup>
        </Marker>
      </MapContainer>
    // </div>
  )
}