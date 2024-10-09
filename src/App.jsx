import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import SeeAllPage from './Pages/SeeAllPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Menampilkan Navbar */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/workPage" element={<WorkPage />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/services" element={<Services/>} /> */}
          <Route path="/alldestination" element={<SeeAllPage/>} />

        </Routes>
        <Footer isOpen={isOpen} />
      </div>
    </BrowserRouter>
  )
}

export default App
