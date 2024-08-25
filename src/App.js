import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './container/home';
import About from './container/about';
import Certificates from './container/certificates';
import Project from './container/project';
import Skills from './container/skills';

function App() {
 return (
  <Router>
 <div className="App">
 <header className="App-header">
 <nav>
 <ul>
 <li><Link to="/" className='ho'>Home</Link></li>
 <li><Link to="/About" id='ho'>About</Link></li>
 <li><Link to="/Skills" id='ho'>Skills</Link></li>
 <li><Link to="/Project" id='ho'>Projects</Link></li>
 <li><Link to="/Certificates" id='ho'>Certificates</Link></li>
 </ul>
 </nav>
 </header></div>
 <Routes>
 <Route  path="/about" element={<About/>} />
 <Route exact path="/" element={<Home />} />
 <Route path="/certificates" element={<Certificates/>} />
 <Route path="/project" element={<Project/>} />
 <Route path="/skills" element={<Skills/>} />
 </Routes>
 </Router>
 );
}

export default App;
