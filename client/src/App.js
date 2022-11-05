import './App.css';
import React ,  { useState } from 'react'
import FormModal from './components/PostForm/FormModal'
import { Button } from 'react-bootstrap'

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    

    <div className="App">   
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <FormModal show = {show} onHide = {handleClose} />
    </div>
  );
}

export default App;
