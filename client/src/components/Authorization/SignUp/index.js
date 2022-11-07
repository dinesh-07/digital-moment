import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../../contexts/User';
import { isEmail } from 'validator';
import { env } from '../../../env';
import _axios from 'axios';

const axios = _axios.create({ baseURL: env.appServer });

const Signup = ({ setModal }) => {
  const { t } = useTranslation();
  const { toggleLoggedIn, setUser } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const handleEmailChange = (e) => { setEmail(e.target.value); setEmailError(false); setSignupError(false); };
  const handleNameChange = (e) => { setName(e.target.value); setNameError(false); };
  const handlePasswordChange = (e) => { setPassword(e.target.value); setPasswordError(false); };
  const handleConfirmPasswordChange = (e) => { setConfirmPassword(e.target.value); setConfirmPasswordError(false); }

  const signup = () => {
    if (isEmail(email) && password.length > 0 && password === confirmPassword && name.length > 0) {
      axios.post('/auth/signup', { name, email, password, isAdmin: false })
        .then((response) => {
          setUser(response.data);
          toggleLoggedIn();
          setModal(false);
        })
        .catch(() => setSignupError(true));
    } else {
      if (!isEmail(email))
        setEmailError(true);
      if (password.length === 0)
        setPasswordError(true);
      if (name.length === 0)
        setNameError(true);
      if (password.length > 0 && confirmPassword !== password)
        setConfirmPasswordError(true);
    }
  }

  return (
    <Form className='d-flex flex-column align-items-center auth'>
      <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t("nav.auth.email")}</Form.Label>
        <Form.Control
          type="email"
          placeholder="john@example.com"
          isInvalid={emailError}
          onChange={handleEmailChange}
          onKeyDown={(e) => e.key === "Enter" && signup()}
          value={email}
        />
        { emailError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidEmail")}</p> : null}
        { signupError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidSignup")}</p> : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>{t("nav.auth.name")}</Form.Label>
        <Form.Control
          type="email"
          placeholder="John Doe"
          isInvalid={nameError}
          onChange={handleNameChange}
          onKeyDown={(e) => e.key === "Enter" && signup()}
          value={name}
        />
        { nameError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidName")}</p> : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t("nav.auth.password")}</Form.Label>
        <Form.Control
          type="password"
          placeholder={t("nav.auth.password")}
          isInvalid={passwordError}
          onChange={handlePasswordChange}
          onKeyDown={(e) => e.key === "Enter" && signup()}
          value={password}
        />
        { passwordError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidPassword")}</p> : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t("nav.auth.passwordConfirm")}</Form.Label>
        <Form.Control
          type="password"
          placeholder={t("nav.auth.password")}
          isInvalid={confirmPasswordError}
          onChange={handleConfirmPasswordChange}
          onKeyDown={(e) => e.key === "Enter" && signup()}
          value={confirmPassword}
          />
          { confirmPasswordError ? <p className='text-danger mt-1 ms-1' style={{ fontSize: 12 }}>{t("nav.auth.invalidConfirmPassword")}</p> : null}
      </Form.Group>
      </div>
      <Button
        variant="primary"
        onClick={signup}
        className='w-50 rounded-0 auth-submit mt-3'
      >
        {t("nav.auth.submit")}
      </Button>
    </Form>
  )
}

export default Signup;