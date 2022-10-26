import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  return (
    <Navbar expand="lg">
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
          <Link style={{ textDecoration: 'none' }} to='/'><h3 className='text-dark fw-bold fst-italic'>Virtual King</h3></Link>
        </div>
        <div className='ms-2'>
          <button className='btn btn-outline-primary'><Link style={{ textDecoration: 'none' }} to='/courses-info'><h5 className='text-dark px-3'>Courses</h5></Link></button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <div className='me-5'>
              {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
              </NavDropdown> */}
            </div>
            <div className='d-flex align-items-center gap-3'>
              <Link className='text-dark' style={{ textDecoration: 'none' }} to='/home'>Home</Link>
              <Link className='text-dark' style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link>
              <Link className='text-dark' style={{ textDecoration: 'none' }} to='/blog'>Blog</Link>
            </div>
            <div className='mx-5'>
              <Form.Check
                type="switch"
                id="custom-switch"
              />
            </div>
            <div>
              <>
                {user?.photoURL ?
                  <Image style={{ height: '35px' }} roundedCircle src={user.photoURL}></Image>
                  : <FaUser></FaUser>
                }
              </>
              {
                user?.uid ?
                  <>
                    <small className=' mx-2'>{user?.displayName}</small>
                    <button onClick={handleLogOut} className='btn btn-outline-dark'>Log out</button>
                  </>
                  :
                  <>
                    <Link className='mx-2' to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;