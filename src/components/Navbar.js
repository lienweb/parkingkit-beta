import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Nav = styled.nav`
  color: salmon;
  display: flex;
`

function Navbar(){
  return (
    <Nav>
      <Link to={'/login'} style={{padding:"10px"}}>Login</Link>
      <Link to={'/register'}>Register</Link>
      <Link to={'/contacts'} style={{padding:"10px"}}>Contacts</Link>
      <Link to={'/map'} style={{ padding: "10px" }}
        zoomlevel={10}>Google maps</Link>
      <Link to={'/map/demo'} style={{ padding: "10px" }}>OpenStreetMap</Link>
    </Nav>
  )
}

export default Navbar;
