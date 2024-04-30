import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {


  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
    </div>
  )
}

export default App
