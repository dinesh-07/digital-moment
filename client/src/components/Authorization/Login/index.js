import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({ setModal }) => {
  return (
    <Form>
      <Form.Group className="mb-3"
      controlId="userEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3"
      controlId="userPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div className='w.100 justify-content-center'>
        <Button
              variant="primary"
              onClick={() => setModal(false)}
              className='w-50 m-auto rounded-0 auth-submit'
            >
              Submit
        </Button>

      </div>

    </Form>


  )
}

export default Login;