import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from '../assets/marker.png'


function LocateButton({center}) {
  const map = useMap()
  const [position, setPosition] = useState(null)

  function handleLocationFound(e) {
    console.log(e.latlng)
    setPosition(e.latlng);
    map.flyTo(e.latlng, map.getZoom());
    console.log('handleLocationFound')
  }
  function handleLocationNotFound() {
    console.log(`to default location:[${center.latlng}]`)
    window.alert('無法定位，定位為預設地點')
    map.flyTo(center)
  }
  function handleOnFindLocation() {
    map.locate({
      setView: false, // 是否讓地圖跟著移動中心點
      watch: true, // 是否要一直監測使用者位置
      maxZoom: 18, // 最大的縮放值
      enableHighAccuracy: true, // 是否要高精準度的抓位置
      timeout: 10000 // 觸發locationerror事件之前等待的毫秒數
    }).on("locationfound", handleLocationFound);
    console.log('handleOnFindLocation')
  }

  useEffect(() => {
    // create button
    if (!map) return;
    const buttonControl = L.control({
      position: 'bottomright'
    })

    buttonControl.onAdd = function (map) {
      this._div = L.DomUtil.create('button', 'btnWrapper')
      const buttonElement = `find my location`
      this._div.innerHTML = buttonElement
      this._div.addEventListener('click', handleOnFindLocation)
      return this._div
    }
    buttonControl.addTo(map)

    return () => {
      console.log('cleanup...')
      //map.remove(buttonControl) //表示destroy map but it's created by useContext, 不需cleanup
      map.on('locationerror', handleLocationNotFound)
      buttonControl.remove() //should cleanup control otherwise re-render 
    }
  }, [])

  // console.log(`painting ui.....:position[${position}]`)
  return position === null ? null
    : (
      <Marker position={position} icon={icon}>
        <Popup>
          You are here: {position.toString().slice(7, -1)}<br />
        </Popup>
      </Marker>
    );
}

export default LocateButton;