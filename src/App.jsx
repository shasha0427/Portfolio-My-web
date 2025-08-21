import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './MYPORTFOLIO/NAV/Navbar';
import Home from './MYPORTFOLIO/Home/home';
import HomeData from './MYPORTFOLIO/Home/homedata';
import About from './MYPORTFOLIO/ABOUT/about';
import Project from './MYPORTFOLIO/PROJECTS/project';
import Contact from './MYPORTFOLIO/CONTACT/contact';
import Resume from './MYPORTFOLIO/RESUME/resume';
import CustomCursor from './MYPORTFOLIO/CURSUR/cursur';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeData />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
