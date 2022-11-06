import { createControlComponent } from '@react-leaflet/core';
import { Control, DomUtil, useMap } from 'leaflet'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchBox from './SearchBox';
import '../stylesheets/stylesheet.css'

// fail

// const container = DomUtil.create('div')
Control.MenuControl = Control.extend({
  option: {
    position: 'topleft'
  },
  onAdd: function (map) {
    return (
      <div className='leaflet-control-container'>
        <Navbar key='false' expand='false' className="leaflet-top leaflet-left justify-content-start">
          <Navbar.Toggle className='bg-light mx-1 p-1' aria-controls='offcanvasNavbar-expand-false' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbarLabel-expand-false'
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <SearchBox />
        </Navbar>
      </div>
    )
  },
  onRemove: function (map) {
    // return 
  }
})

// function Menu() {

const MenuControl = createControlComponent(
  (props) => new Control.MenuControl(props)
)

export default MenuControl()