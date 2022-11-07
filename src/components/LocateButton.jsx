import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function LocateButton({ center }) {
  const map = useMap()
  const [position, setPosition] = useState(null)
  const circleIcon = new L.Icon({
    iconUrl: require('../assets/marker-dot.png'),
    iconSize: [10, 10]
  })

  function handleLocationFound(e) {
    //set & get lat lng
    setPosition(e.latlng);
    map.flyTo(e.latlng, map.getZoom());
    // add marker radius
    const radius = e.accuracy;
    const currentRadius = L.circleMarker(e.latlng, {
      radius,
      color: '#136AEC',
      stroke: false,
      opacity: 0.15,
      
    })
    currentRadius.addTo(map);
  }
  function handleLocationNotFound() {
    window.alert('無法定位，定位為預設地點')
    map.flyTo(center)
  }
  function handleOnFindLocation() {
    map.locate({
      setView: false,
      watch: true,
      maxZoom: 18,
      enableHighAccuracy: true,
      timeout: 10000
    }).on("locationfound", handleLocationFound)
  }

  useEffect(() => {
    // create button
    if (!map) return;
    const buttonControl = L.control({
      position: 'bottomright'
    })

    buttonControl.onAdd = function (map) {
      this._div = L.DomUtil.create('button', 'btn-wrapper')
      const buttonElement = `<span class="material-symbols-outlined">near_me</span>`
      this._div.innerHTML = buttonElement
      this._div.addEventListener('click', handleOnFindLocation)
      return this._div
    }
    buttonControl.addTo(map)

    return () => {
      //map.remove(buttonControl) //表示destroy map but it's created by useContext, 不需cleanup
      map.on('locationerror', handleLocationNotFound)
      buttonControl.remove() //should cleanup control otherwise re-render 
    }
  }, [])

  return position === null ? null
    : (
      <Marker position={position} icon={circleIcon}>
        <Popup>
          You are here: {position.toString().slice(7, -1)}<br />
        </Popup>
      </Marker>
    );
}

export default LocateButton;

// rgb(19, 106, 236)