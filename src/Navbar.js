import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    
    <Navbar bg="light" expand="lg" sticky="top" >
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://i.imgur.com/AEw7daW.jpg" style={{width:"150px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Price</Nav.Link>
            <Nav.Link href="#action2">Gallery</Nav.Link>
            <Nav.Link href="#action2">Location</Nav.Link>
            <Nav.Link href="#action2">Video</Nav.Link>
          
          </Nav>
         
        </Navbar.Collapse>
        
        <div className='call'><img src="https://i.imgur.com/xSFzKA3.gif" style={{width:"40px",background:"#434343"}}/>+91-81-3030-6040</div>
      </Container>
      
    </Navbar>
  
  );
}

export default NavScrollExample;