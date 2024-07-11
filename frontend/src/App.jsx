import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import WigDetail from './pages/WigDetail';
import Admin from './pages/Admin';
import Cgv from './pages/Cgv';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/wigDetail" element={<WigDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cgv" element={<Cgv />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
