import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../SectionOne/Header.css';


function Header() {
  return (
    <Navbar className="custom-navbar" fixed="top">
      <Nav className=" justify-content-center mx-auto">
        <Nav.Link className="ms-3" href="#" active={true}>HOME</Nav.Link>
        <Nav.Link className="ms-3" href="#" active={true}>STORE</Nav.Link>
        <Nav.Link className="ms-3" href="#" active={true}>ABOUT</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className='cart-holder' href="#" active={true}>Cart (0)</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
