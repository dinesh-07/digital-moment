import Navigation from './components/Layout/Navigation';
import Preview from './components/Preview';
import Footer from './components/Layout/Footer';
import { useContext } from 'react'
import { UserContext } from './contexts/User';
import './App.css';

function App() {
  const { toggleLang } = useContext(UserContext);
  return (
    <div>
      <Navigation />
      <Preview />
      <Footer />
      <button onClick={toggleLang}>Lng</button>
    </div>
  );
}

export default App;
