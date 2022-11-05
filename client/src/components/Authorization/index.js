import React from 'react'
import Login from './Login';
import Signup from './SignUp';
import './style.scss';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Authorization = ({ show, setShow, openLogin, setOpenLogin }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)} centered contentClassName='rounded-0'>
        <Modal.Header className='justify-content-center border-0'>
          <Nav
          activeKey={openLogin ? 'login' : 'signup'}
          onSelect={key => setOpenLogin(key === 'login')}
          >
            <Nav.Item>
              <Nav.Link eventKey='login'>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          { openLogin ? <Login /> : <Signup /> }
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button
            variant="primary"
            onClick={() => setShow(false)}
            className='w-50 m-auto rounded-0 auth-submit'
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Authorization;