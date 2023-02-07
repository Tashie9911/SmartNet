import logo from './logo.svg';
import './App.css';

// components
import NavBar from './components/NavBar';
import Home from './components/Home';
import ContactUs from './components/Contact';
import Properties from './components/Properties';
import Propertiesmanagement from './components/Properties management';
import Rentingservices from './components/Rentingservices';
import Buyingandselling from './components/Buyingandselling';
import Users from './components/Users';
import Login from './components/Login';
import Signin from './components/Signin';




import {BrowserRouter,Routes,Route} from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/Properties" element={<Properties />} />
       <Route path="/Propertiesmanagement" element={<Propertiesmanagement />} />
       <Route path="/Rentingservices" element={<Rentingservices />} />
       <Route path="/Buyingandselling" element={<Buyingandselling />} />
       <Route path="/Users" element={<Users />} />+
       <Route path="/Login" element={<Login />} />
       <Route path='/Edit/:id' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
