import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headnavigation from './Components/Headnavigation/Headnavigation';
import Home from './Pages/Home';
import Web from './Pages/Web';
import Games from './Pages/Games';
import About from './Pages/About';
import Contact from './Pages/Contact'
import NotFoundPage from './Pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className='fullpage'>
      <Headnavigation />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/web' element={<Web />} />
          <Route path='/games' element={<Games />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
