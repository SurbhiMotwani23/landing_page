import React from 'react';
import './App.css';
import Home from './Components/Home';
import Features from './Components/Features'; // Update component name to PascalCase
import Footer from './Components/Footer';
import Integrate from './Components/Integrate';
import Navbar from './Components/Navbar';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features /> {/* Correct component name to PascalCase */}
      <Work />
      <Integrate />
      <Footer />
    </div>
  );
}

export default App;
