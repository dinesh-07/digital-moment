import Navigation from './components/Layout/Navigation';
import Preview from './components/Preview';
import './App.css';
import React from 'react'
import i18n from './i18n';
import { Footer } from 'react-bootstrap/lib/Modal';

function App() {
  return (
    <div>
      <Navigation />
      <Preview />
      <button onClick={() => i18n.changeLanguage("fr")}>Lng</button>
      <Footer />
    </div>
  );
}

export default App;
