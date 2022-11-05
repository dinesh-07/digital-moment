import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = ({ setModal }) => {
  return (
    <Form className='d-flex flex-column align-items-center auth'>
      <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="john@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label> Name</Form.Label>
        <Form.Control type="email" placeholder="John Doe"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm your password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </div>
      <Button
        variant="primary"
        onClick={() => setModal(false)}
        className='w-50 rounded-0 auth-submit mt-3'
      >
        Submit
      </Button>
    </Form>
  )
}

export default Signup;