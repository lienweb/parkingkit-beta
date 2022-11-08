import { useState, useEffect } from 'react'
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from './MarkerClusterGroup'
import { apiHelper } from '../utils/helpers'
import ParkingMarker from './ParkingMarker'
import proj4 from 'proj4'


// pass api info into marker
function ParkingMarkers() {
  // const map = useMap()
  const [coordinates, setCoordinates] = useState([])
  const [availability, setAvailability] = useState([])

  const fetchInfo = async () => {
    try {
      const res = await apiHelper.get('/info') //axios automatically create json, emit res.json() & process res code
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

  const fetchAvailability = async () => {
    try {
      const res = await apiHelper.get('/availability')

      // console.log(`avail:${JSON.stringify(res.data.data.park)}`)
      setAvailability(res.data.data.park)
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

  // get data from api
  useEffect(() => {
    async function callMutipleApis() {
      // console.time()
      const promises = [
        fetchInfo(),
        fetchAvailability()
      ]
      Promise.allSettled(promises).then(values => {
        console.log(values);
        // console.timeEnd();
      });
    }
    callMutipleApis();
  }, [])

  console.log(`info:${coordinates.length}`);
  console.log(`avail:${availability.length}`)

  // get coordinates
  const coordArr = coordinates.map((coordinate, i) => {
    proj4.defs([
      ["EPSG:3826", "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
      ["EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs +type=crs"]
    ])

    // convert coordinates
    const { tw97x, tw97y } = coordinate
    const [lng, lat] = proj4('EPSG:3826', 'EPSG:4326', [parseFloat(tw97x), parseFloat(tw97y)])

    return {
      id: coordinate.id,
      name: coordinate.name,
      address: `台北市${coordinate.area}${coordinate.address}`,
      tel: coordinate.tel,
      payDescription: coordinate.payex,
      fareInfo: coordinate.FareInfo,
      serviceTime: coordinate.serviceTime,
      totalCar: coordinate.totalcar,
      totalMotor: coordinate.totalmotor,
      lat: lat.toFixed(6),
      lng: lng.toFixed(6)
    }
  })

  // data process
  const infoArr = coordArr.map((coord) => {
    const avail = availability.find(item => item.id === coord.id)

    return {
      id: coord.id,
      position: { lat: coord.lat, lng: coord.lng },
      description: {
        ...coord,
        ...avail
      }
    }
  })

  console.log(infoArr)

  return (
    // <>
    <MarkerClusterGroup>
      {
        infoArr.map((info) => (
          <ParkingMarker key={info.id}
            position={info.position}
            description={info.description} />
        ))
      }
    </MarkerClusterGroup>
    // </>
  )

}

export default ParkingMarkers