import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = ({setModal}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your first name!"/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your last name!"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm your Password!</Form.Label>
        <Form.Control type="password" placeholder="Please enter your password " />
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

export default Signup;