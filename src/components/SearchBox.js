import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/assets/css/leaflet.css";
import { useMap } from "react-leaflet/hooks";
import { useEffect } from "react";
import L from 'leaflet'

export default function SearchBox({ position }) {
  const map = useMap()
  const provider = new OpenStreetMapProvider();
  const icon = new L.Icon({
    iconUrl: require('../assets/marker.png'),
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -46]
  })
  const searchControl = new GeoSearchControl({
    provider,
    position,
    style: 'button',
    searchLabel: '請輸入地址',
    notFoundMessage: '找不到此地址',
    autoComplete: true,
    autoCompleteDelay: 150,
    marker: {
      icon
    }
  });

  useEffect(() => {
    if(!map) return
    map.addControl(searchControl);

    //cleanup
    return () => {
      map.removeControl(searchControl)
    }
  }, [])
}
