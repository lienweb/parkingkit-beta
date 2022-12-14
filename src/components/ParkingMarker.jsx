import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import { Container, Badge } from 'react-bootstrap'

function ParkingMarker({ position, description }) {
  const markerIcon = new L.Icon({
    iconUrl: require('../assets/marker.png'),
    iconSize: [24, 36],
    iconAnchor: [12, 36], //align when zoom in out
    popupAnchor: [0, -46]
  })
// console.log(description)

  return (
    <Marker position={[position.lat, position.lng]} icon={markerIcon}>
      <Popup>
        <Container fluid className="popup__container">
          <div className="d-flex justify-content-between align-items-center">
            <h5>剩餘:{(description.availablecar < 0) ? '無資料' : description.availablecar}
              /總共:{description.totalCar ? description.totalCar : 'N/A'}</h5>
            <Badge bg="secondary">營業中</Badge>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>{description.name}</h6>
              <h6>{(Object.keys(description.fareInfo).length === 0) ? '$ N/A' : `$ ${description.fareInfo.WorkingDay[0].Fare}`}</h6>
            </div>
            <Link to={`/parking-lot/${description.id}`}
            className='btn btn-secondary text-white'
            state={description}>
              詳細資訊
            </Link>
          </div>
        </Container>
      </Popup>
    </Marker>
  )
}

export default ParkingMarker