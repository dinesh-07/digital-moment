import React from 'react'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './navstyle.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='flex mt-4'>
        <Container>
          <Navbar.Brand href="#home">
              <img alt='logo' src ="https://digitalmoment.org/img/logo-DM-dark.png" className='align-items-center justify-content-center w-75'/>
          </Navbar.Brand>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <div>
                    <p>
                      {t("footer")}
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

        </Container>
      </Navbar>
    </>
  )
}

export default Footer