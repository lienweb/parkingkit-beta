import { useState, useEffect } from 'react'
import parkingLotApi from '../apis/parkingLot'
import L from 'leaflet'
import { apiHelper } from '../utils/helpers'
import ParkingMarker from './ParkingMarker'
import proj4 from 'proj4'

// pass api info into marker
function ParkingMarkers() {
  const [coordinates, setCoordinates] = useState([])
  const markerIcon = new L.Icon({
    iconUrl: require('../assets/marker.png'),
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -46]
  })

  // get data from api
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await apiHelper.get('/info') //axios automatically create json, emit res.json() & process res code
        console.log(`total fetch:${res.data.park.length}`)
        setCoordinates(res.data.park)
      } catch (err) {
        if (err.response) {
          //if res code not 200
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          // if 404 or no res
          console.log(`Err:${err.message}`)
        }
      }
    }
    fetchInfo()
  }, [])

  // use coordinates and place marker
  const infoArr = coordinates.map((coordinate, i) => {
    proj4.defs([
      ["EPSG:3826", "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
      ["EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs +type=crs"]
    ])

    // convert coordinates
    const { tw97x, tw97y } = coordinate
    const [lng, lat] = proj4("EPSG:3826", 'EPSG:4326', [parseFloat(tw97x), parseFloat(tw97y)])

    return { lat: lat.toFixed(6), lng:lng.toFixed(6)}
  })

  console.log(infoArr)

  return (
    <>
      {
        infoArr.map((info, i) => (
          <ParkingMarker key={i}
            position={{ lat: info.lat, lng: info.lng }}
            description="" />
        ))
      }
    </>
  )

}

export default ParkingMarkers