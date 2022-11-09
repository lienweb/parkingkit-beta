import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iconArrowBack from '../assets/icon-arrow-back.svg'
import iconNavigation from '../assets/icon-navigate.svg'
import iconBookmark from '../assets/icon-bookmark.svg'
// import iconBookmarked from '../assets/icon-bookmark-added.svg'
import iconAddress from '../assets/icon-location.svg'
import iconPrice from '../assets/icon-money.svg'
import iconTel from '../assets/icon-tel.svg'
import iconInfo from '../assets/icon-info.svg'
import iconCopy from '../assets/icon-copy.svg'
import iconBuilding from '../assets/icon-building.svg'
import iconChat from '../assets/icon-chat.svg'
import illustation from '../assets/parking-lot-detail-page.svg'
import parkingLotImg from '../assets/parking-lot-example.jpeg'

function ParkingLotDetail() {
  // let { id } = useParams()
  let { state } = useLocation()
  const navigate = useNavigate()
  console.log(state.fareInfo)

  return (
    <>
      <Navbar bg="light" expand="md" style={{ outline: 'steelblue' }}>
        <Container className='align-self-end my-3'>
          <div className='d-flex align-self-end'>
            <button className="image__fixed-width-1 btn-back me-3" onClick={() => { navigate(-1)}}>
              <img src={iconArrowBack} alt="go-back" className="image__fluid" />
            </button>
            <h3 className='m-0'>{state.name}</h3>
          </div>
          <button className="image__fixed-width-1 btn-back me-3">
            <img src={iconBookmark} alt="bookmark" className="image__fluid" />
          </button>
        </Container>
      </Navbar>
      <Container className='mt-4'>
        <Row>
          <Col md={12}>
            <h3>車位資訊：剩餘 {state.availablecar} / 總共 {state.totalCar}</h3>
          </Col>
          <Col md={7} className='d-flex'>
            <div className='image__fixed-width-1'>
              <img src={iconPrice} className="image__fluid" alt='dollar-sign' />
            </div>
            <h3 className='image__text'>{(Object.keys(state.fareInfo).length === 0) ? '無資料' : state.fareInfo.WorkingDay[0].Fare}</h3>
          </Col>
          <Col md={5}>
            <div>
              <img src={parkingLotImg} className="image__fluid image__lg" alt='parking-lot-example' />
            </div>
          </Col>
        </Row>
        <Row className='my-3'>
          <Col md={7} className='d-flex'>
            <div className='image__fixed-width-2 me-1'>
              <img src={iconAddress} className="image__fluid" alt='dollar-sign' />
            </div>
            <h3 className='image__text'>{state.address}
              <img src={iconCopy} className="d-inline-block image__fluid image__fixed-width-1 ms-2" alt='copy-address' />
            </h3>
          </Col>
        </Row>
        <Row className='my-3'>
          <Col md={7} className='d-flex'>
            <div className='image__fixed-width-1 me-3'>
              <img src={iconBuilding} className="image__fluid" alt='business-hour' />
            </div>
            <h3 className='image__text'>{state.serviceTime.length ? state.serviceTime : '無資料'}</h3>
          </Col>
        </Row>
        <Row className='my-3'>
          <Col md={7} className='d-flex'>
            <div className='image__fixed-width-1 me-3'>
              <img src={iconInfo} className="image__fluid" alt='business-hour' />
            </div>
            <h3 className='image__text'>{state.payDescription.length ? state.payDescription : '無資料'}</h3>
          </Col>
          <Col md={5}>
            <Link to={`/`} className='d-flex'>
              <div className='image__fixed-width'>
                <img src={iconNavigation} className="image__fluid" alt='dollar-sign' />
              </div>
              <h3 className='image__text'>導航</h3>
            </Link>
          </Col>
        </Row>
        <Row className='my-3'>
          <Col md={7} className='d-flex'>
            <div className='image__fixed-width-1 me-3'>
              <img src={iconTel} className="image__fluid" alt='business-hour' />
            </div>
            <h3 className='image__text'>{state.tel.length ? state.tel : '無資料'}</h3>
          </Col>
          <Col md={5} className='d-flex'>
            <div className='image__fixed-width'>
              <img src={iconChat} className="image__fluid" alt='dollar-sign' />
            </div>
            <h3 className='image__text'>我要回報</h3>
          </Col>
          <Col>
            <img src={illustation} alt="illustation" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ParkingLotDetail
