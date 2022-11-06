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

  return (
    <Marker position={[position.lat, position.lng]} icon={markerIcon}>
      <Popup>
        <Container fluid className="popup__container">
          <div className="d-flex justify-content-between align-items-center">
            <h5>剩餘20/總共30</h5>
            <Badge bg="secondary">營業中</Badge>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>xx停車場</h6>
              <h6>$ 60</h6>
            </div>
            <Link to="/#" className='btn btn-secondary text-white'>導航</Link>
          </div>
        </Container>
      </Popup>
    </Marker>
  )
}

export default ParkingMarker