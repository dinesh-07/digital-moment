import Navigation from './components/Layout/Navigation';
import Preview from './components/Preview';
import './App.css';
import React from 'react'
import i18n from './i18n';

function App() {
  return (
    <div>
      <Navigation />
      <Preview />
      <button onClick={() => i18n.changeLanguage("fr")}>Lng</button>
    </div>
  );
}

export default App;
