import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './navstyle.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Footer() {

  return (
    <>
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
                <div>
                    <p>
                    Founded in 2013 by Kate Arthur, Digital Moment (formerly Kids Code Jeunesse) is a Canadian-based charity and a global leader in mobilizing communities to build a better future through 
                    digital skills education. Digital Moment focuses on creating programs and experiences for youth and their communities on digital skills like coding, algorithm and data literacy, and 
                    artificial intelligence. Digital Moment includes three educational initiatives: Kids Code Jeunesse, Digital2030, and a social innovation lab.
                    </p>
                </div>
              </Nav>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.90886500467!2d-73.57222448417428!3d45.51191317910153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4bcb9dad3f%3A0x5d088e7b2a32cdec!2s51%20Sherbrooke%20St%20W%2C%20Montreal%2C%20QC%20H2X%201X2!5e0!3m2!1sen!2sca!4v1667690653796!5m2!1sen!2sca"
                    width="300" 
                    title="GeoLocation"
                    height="150" 
                    loading="lazy"
                    allowFullScreen=""
                >
                </iframe>
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer