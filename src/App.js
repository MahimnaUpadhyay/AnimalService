import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import Servies from './Components/Servies';
import Aboutus from './Components/Aboutus';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
          <Navbar/>

            <Routes>
              <Route path="/" element={<MainPage/>}/>
            </Routes>

            <Routes>
              <Route path="/Servies" element={<Servies/>}/>
            </Routes>

            <Routes>
              <Route path="/About" element={<Aboutus/>}/>
            </Routes>

          <Footer />
    </>
  );
}

export default App;
