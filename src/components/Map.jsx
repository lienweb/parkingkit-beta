import { useState, useEffect } from 'react';
import '../stylesheets/stylesheet.css'
import "leaflet/dist/leaflet.css";
import L, { marker, LeafletMouseEvent } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'



function LocationMarker({ center, icon }) {
  const [position, setPosition] = useState(null)
  const map = useMap();

  function locationFound(e) {
    setPosition(e.latlng);
    map.flyTo(e.latlng, map.getZoom());
  }
  function locationNotFound() {
    window.alert('無法定位，定位為預設地點')
    map.flyTo(center)
  }

  useEffect(() => {
    map.locate({
      setView: false, // 是否讓地圖跟著移動中心點
      watch: true, // 是否要一直監測使用者位置
      maxZoom: 18, // 最大的縮放值
      enableHighAccuracy: true, // 是否要高精準度的抓位置
      timeout: 10000 // 觸發locationerror事件之前等待的毫秒數
    }).on("locationfound", locationFound);
    // console.log(position.toString().slice(7, -1));

    return () => {
      map.on('locationerror', locationNotFound)
    }
  }, [map]);

  return position === null ? null
    : (
      <Marker position={position} icon={icon}>
        <Popup>
          You are here: {position.toString().slice(7, -1)}<br />
        </Popup>
      </Marker>
    );
}


export default function Map() {
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
      scrollWheelZoom={true}
      zomControl={false}
      className="map__container" >
      <TileLayer
        attribution='&copy; <a href="https://www. openstreetmap.org/copyright">OpenStreetMap</ a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <button type="button">test</button>
      {/* 停車場位置 */}
      <Marker position={[center.lat, center.lng]} icon={markerIcon}>
        <Popup>
          <b>test</b>
        </Popup>
      </Marker>
      {/* 使用者位置 */}
      <LocationMarker center={center} icon={markerIcon} />
    </MapContainer>
    // </div>
  )
}