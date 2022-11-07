import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import './App.css';
import Dashboard from './components/Dashboard';
import Post from './components/DetailedPost/Post'

function App() {
  return (
    <div>
      <Navigation />
      {/* <Dashboard /> */}
      <Post/>
      <Footer />
    </div>
  );
}

export default App;
