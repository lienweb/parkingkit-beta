import { useState, useEffect } from "react";
import {useMap} from 'react-leaflet/hooks';
import {Marker, Popup} from 'react-leaflet'

export default function LocationMarker({ center, icon }) {
  const [position, setPosition] = useState(null)
  const map = useMap()
  // console.log(map)

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