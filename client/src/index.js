import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './custom.scss';
import App from './App';
import './i18n'
import { UserProvider } from './contexts/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostView from './components/PostView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/post/:id' element={<PostView />} />
        <Route path='*' element={<App />} />
      </Routes>
    </Router>
  </UserProvider>
);