import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">halfwayhome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/ourdesigns">Designs Concepts</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>

            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </Nav.Link>
            <Nav.Link href="/signin">
              <i className="fas fa-user"></i> Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
