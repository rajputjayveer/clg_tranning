import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Contact from './pages/contact';
import Propertydetails from './pages/property-details';
import Properties from './pages/Properties';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Propertydetails" element={<Propertydetails />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;
