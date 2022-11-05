import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Authorization from './components/Authorization';
import Navigation from './components/Layout/Navigation'

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navigation />
      <Authorization show={openAuth} setShow={setOpenAuth} openLogin={isLogin} setOpenLogin={setIsLogin} />
      <Button variant='primary' className='rounded-0' onClick={() => { setOpenAuth(true); setIsLogin(true) }}>Login</Button>
      <Button variant='primary' className='rounded-0' onClick={() => { setOpenAuth(true); setIsLogin(false) }}>Sign Up</Button>
    </div>
  );
}

export default App;
