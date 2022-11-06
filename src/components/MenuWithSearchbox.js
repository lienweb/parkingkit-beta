import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Menu() {
  return (
    <Navbar key='false' bg="light" expand='true' className="nav__sidepanel">
      <Container fluid>
        <div className='d-flex'>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false' />
          <Form className="d-flex">
            <ButtonGroup>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
              <Button variant="outline-secondary">Search</Button>
            </ButtonGroup>
          </Form>
        </div>
        <Navbar.Brand href="#">ParkingKit-beta</Navbar.Brand>
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-false'
          aria-labelledby='offcanvasNavbar-expand-false'
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbar-expand-false'>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id='offcanvasNavbar-expand-false'
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Menu;