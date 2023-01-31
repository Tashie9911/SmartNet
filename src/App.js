import logo from './logo.svg';
import './App.css';

// components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Cars from './components/Cars';
import Addcar from './components/Add car';
import Admin from './components/Admin';

import {BrowserRouter,Routes,Route} from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Cars" element={<Cars />} />
       <Route path="/Admin" element={<Admin />} />
       <Route path='/Addcar' element={<Addcar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
