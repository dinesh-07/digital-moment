import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CreatePost from './CreatePost'

const FormModal = ({ show, onHide }) => {
  return (
    <Modal size="lg" aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={onHide}>
        
        <Modal.Header closeButton>
          <Modal.Title>Create Challenge/Idea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreatePost/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default FormModal