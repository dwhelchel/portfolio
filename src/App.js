import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
