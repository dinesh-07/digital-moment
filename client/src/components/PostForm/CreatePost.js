import React, { useState } from 'react'
import { Modal, Button, Nav} from 'react-bootstrap';
import PostForm from './PostForm';
import "./style.scss";

const CreatePost = ({ show, setShow }) => {
  
  const [isChallenge, setIsChallenge] = useState(true)  

  return (

      <Modal size="xl" show={show} onHide={() => setShow(false)} contentClassName='rounded-10'>
         <Modal.Header>
          <Nav
            activeKey={isChallenge ? 'challenge' : 'idea'}
            onSelect={key => setIsChallenge(key === 'challenge')}
            >
              <Nav.Item>
                <Nav.Link eventKey='challenge'>Challenge</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='idea'>Idea</Nav.Link>
              </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          <PostForm isChallenge = {isChallenge}/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)} 
            className='w-10 rounded-0 form-submit mt-3'>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShow(false)} className='w-22 rounded-0 form-submit mt-3'>
            Done
          </Button>
        </Modal.Footer> 
    
    </Modal>
    
    
  )
};

export default CreatePost;