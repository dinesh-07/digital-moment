import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './custom.scss';
import App from './App';
import './i18n'
import { UserProvider } from './contexts/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChallengeView from './components/PostView/ChallengeView';
import IdeaView from './components/PostView/IdeaView'
import Landing from './components/Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <Router>
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/' element={<App />} />
        <Route path='/challenge/:id' element={<ChallengeView />} />
        <Route path='/idea/:id' element={<IdeaView />} />
        <Route path='*' element={<App />} />
      </Routes>
    </Router>
  </UserProvider>
);