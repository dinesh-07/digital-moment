import React from 'react'
import Login from './Login';
import Signup from './SignUp';
import './style.scss';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

const Authorization = ({ show, setShow, openLogin, setOpenLogin }) => {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={() => setShow(false)} centered contentClassName='rounded-0'>
        <Modal.Header className='justify-content-center border-0'>
          <Nav
          activeKey={openLogin ? 'login' : 'signup'}
          onSelect={key => setOpenLogin(key === 'login')}
          >
            <Nav.Item>
              <Nav.Link eventKey='login'>{t("nav.auth.login")}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='signup'>{t("nav.auth.signup")}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          { openLogin ? <Login setModal={setShow} /> : <Signup setModal={setShow} /> }
        </Modal.Body>
      </Modal>
  )
}

export default Authorization;