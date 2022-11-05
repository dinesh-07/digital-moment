import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
<<<<<<< HEAD
import "../../App.css"
import { useState } from 'react'
import Button from "react-bootstrap/Button"
import Authorization from '../Authorization'
function Navigation() {
    const [openAuth, setOpenAuth] = useState(false);
    const [isLogin, setIsLogin] = useState(true);


  return (
    <>
    <Authorization show={openAuth} setShow={setOpenAuth} openLogin={isLogin} setOpenLogin={setIsLogin} />
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='flex'>
=======
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
>>>>>>> 69ddc90 (created navbar component)
      <Container>
        <Navbar.Brand href="#home">
            <img src ="https://digitalmoment.org/img/logo-DM-dark.png" className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
<<<<<<< HEAD
            <Nav.Link>
                <Button variant='primary' className='rounded-0' onClick={() => { setOpenAuth(true); setIsLogin(true) }}>Login</Button>
                </Nav.Link>
            <Nav.Link>
                <Button variant='primary' className='rounded-0' onClick={() => { setOpenAuth(true); setIsLogin(false) }}>Sign Up</Button>
=======
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">
              Sign Up
>>>>>>> 69ddc90 (created navbar component)
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
<<<<<<< HEAD
    </Navbar></>
    
=======
    </Navbar>
>>>>>>> 69ddc90 (created navbar component)
  )
}

export default Navigation