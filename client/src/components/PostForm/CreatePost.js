import React, { useState } from 'react'
import { Modal, Nav} from 'react-bootstrap';
import PostForm from './PostForm';
import "./style.scss";
import { useTranslation } from 'react-i18next';

const CreatePost = ({ show, setShow }) => {
  const { t } = useTranslation();
  const [isChallenge, setIsChallenge] = useState(true)

  return (
      <Modal size="xl" show={show} onHide={() => setShow(false)} centered contentClassName='rounded-0'>
         <Modal.Header className='justify-content-center border-0'>
          <Nav
            activeKey={isChallenge ? 'challenge' : 'idea'}
            onSelect={key => setIsChallenge(key === 'challenge')}
            >
              <Nav.Item>
                <Nav.Link eventKey='challenge'>{t("challenge")}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='idea'>{t("idea")}</Nav.Link>
              </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body className='p-5'>
          <PostForm isChallenge={isChallenge} setShow={setShow} />
        </Modal.Body>
    </Modal>


  )
};

export default CreatePost;