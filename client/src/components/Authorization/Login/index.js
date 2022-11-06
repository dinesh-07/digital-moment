import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { isEmail } from 'validator';
import _axios from 'axios';
import { env } from '../../../env';
import { UserContext } from '../../../contexts/User';

const axios = _axios.create({ baseURL: `${env.appServer}/api` });

const Login = ({ setModal }) => {
  const { t } = useTranslation();
  const { toggleLoggedIn, setUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleEmailChange = (e) => { setEmail(e.target.value); setEmailError(false); setLoginError(false); };
  const handlePasswordChange = (e) => { setPassword(e.target.value); setPasswordError(false); setLoginError(false); };

  const login = () => {
    if (isEmail(email) && password.length > 0) {
      axios.post('/auth/login', { email, password })
        .then((response) => {
          setUser(response.data);
          toggleLoggedIn();
          setModal(false);
        })
        .catch(() => setLoginError(true));
    } else {
      if (!isEmail(email))
        setEmailError(true);
      if (password.length === 0)
        setPasswordError(true);
    }
  }

  return (
    <Form className='d-flex flex-column align-items-center auth'>
      <div>
        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>{t("nav.auth.email")}</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@example.com"
            isInvalid={emailError}
            onChange={handleEmailChange}
            onKeyDown={(e) => e.key === "Enter" && login()}
            value={email}/>
          { emailError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidEmail")}</p> : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="userPassword">
          <Form.Label>{t("nav.auth.password")}</Form.Label>
          <Form.Control
            type="password"
            placeholder={t("nav.auth.password")}
            isInvalid={passwordError}
            onChange={handlePasswordChange}
            onKeyDown={(e) => e.key === "Enter" && login()}
            value={password}
          />
          { passwordError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidPassword")}</p> : null}
        </Form.Group>
      </div>
      <Button
        variant="primary"
        onClick={login}
        className='w-50 rounded-0 auth-submit mt-3'
      >
        {t("nav.auth.submit")}
      </Button>
      { loginError? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidLogin")}</p> : null}
    </Form>
  )
}

export default Login;