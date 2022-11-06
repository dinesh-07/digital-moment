import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';


const Login = ({ setModal }) => {
  const { t } = useTranslation()

  return (
    <Form className='d-flex flex-column align-items-center auth'>
      <div>
        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>{t("nav.auth.email")}</Form.Label>
          <Form.Control type="email" placeholder="john@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userPassword">
          <Form.Label>{t("nav.auth.password")}</Form.Label>
          <Form.Control type="password" placeholder={t("nav.auth.password")} />
        </Form.Group>
      </div>
      <Button
        variant="primary"
        onClick={() => setModal(false)}
        className='w-50 rounded-0 auth-submit mt-3'
      >
        {t("nav.auth.submit")}
      </Button>
    </Form>
  )
}

export default Login;