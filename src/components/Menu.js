import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';


const Menu = () =>{
    return (
     <div className='App tc f3'>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href="#">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Menu;
