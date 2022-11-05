import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { useState } from 'react'
import Button from "react-bootstrap/Button"
import Authorization from '../Authorization'
import './navstyle.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
    const [openAuth, setOpenAuth] = useState(false);
    const [isLogin, setIsLogin] = useState(true);


  return (
    <>
      <Authorization show={openAuth} setShow={setOpenAuth} openLogin={isLogin} setOpenLogin={setIsLogin} />
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='flex mt-4'>
        <Container>
          <Navbar.Brand href="#home">
              <img alt='logo' src ="https://digitalmoment.org/img/logo-DM-dark.png" className='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas id="responsive-navbar-nav" placement="end">
            <Offcanvas.Header closeButton className='justify-content-end'/>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link className='justify-content-center'>
                  <Button variant='primary' className='rounded-0 nav-auth' onClick={() => { setOpenAuth(true); setIsLogin(true) }}>Login</Button>
                </Nav.Link>
                <Nav.Link>
                  <Button variant='primary' className='rounded-0 nav-auth' onClick={() => { setOpenAuth(true); setIsLogin(false) }}>Sign Up</Button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation