import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About'; // Import the About page
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Skills from './Pages/Skills';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import User from './Pages/User';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
