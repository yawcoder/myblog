import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tags from './components/Tags';
import About from './components/About';
import Contact from './components/Contact';
import PostPage from './components/PostPage';

function App() {


  return (
    <div>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:pathName" element={<PostPage/>}/>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
