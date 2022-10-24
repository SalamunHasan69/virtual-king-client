import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className='d-flex align-items-center gap-3'>
          <Link to='/'>
            <img
              src="https://i.insider.com/565b1cf6dd08955b3f8b4594?width=750&format=jpeg&auto=webp"
              width="35"
              height="35"
              className="d-inline-block align-top rounded-circle"
              alt="logo"
            />
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/'><h3>Virtual King</h3></Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <div className='me-5'>
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <Link style={{ textDecoration: 'none' }} to='/home'>Home</Link>
              <Link style={{ textDecoration: 'none' }} to='/blog'>Blog</Link>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;