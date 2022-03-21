import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Navbar.Brand style={{marginLeft: '1em'}} as={Link} to='/'>Deathly Drive</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user'>
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent
