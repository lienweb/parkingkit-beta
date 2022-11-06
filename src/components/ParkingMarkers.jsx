import { useState, useEffect } from 'react'
import parkingLotApi from '../apis/parkingLot'
import L from 'leaflet'
import { apiHelper } from '../utils/helpers'
import ParkingMarker from './ParkingMarker'

// pass api info into marker
function ParkingMarkers() {
  const [coordinates, setCoordinates] = useState([])
  const markerIcon = new L.Icon({
    iconUrl: require('../assets/marker.png'),
    iconSize: [24, 36],
    iconAnchor: [12, 36], //align when zoom in out
    popupAnchor: [0, -46]
  })

  // console.log(parkingLotApi)

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
    // process coordinates
    const coordArray = coordinate.EntranceCoord.EntrancecoordInfo
    // console.table(`[${i}]${JSON.stringify(array[array.length-1])}`)

    const { Xcod, Ycod } = coordArray[coordArray.length - 1]
    //console.log(typeof(Xcod)) // string
    // console.log(`1[${i}][${Xcod}][${Ycod}]`)
    //  console.log(`total processed: [${array.length}]`)
    //TODO: if coord not present, use TWD97 and convert to lat/lng

    const { Xcod: lat, Ycod: lng } =
      { Xcod: parseFloat(Xcod), Ycod: parseFloat(Ycod) }
    // console.log(`[${i}][${lat}][${lng}]`)

    // process description

    return { lat, lng }
  })

  // console.log(infoArr)

  return (
    <>
      {
        infoArr.map((info, i)=>(
          <ParkingMarker key={i}
           position={{lat:info.lat, lng:info.lng}}
          description="" />
        ))
      }
    </>
  )

}

export default ParkingMarkers