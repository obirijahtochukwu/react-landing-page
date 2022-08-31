import React from 'react';
import Navbar from './navigation/Navbar';
import HomePage from "./screens/HomePage";
import './App.css';

function App() {
  return (
    <div>
      <div className="d-none d-md-block">
        <Navbar/>
        <HomePage/>
      </div>
      <div className="mobile-view d-md-none">
        OOPS! OOPS!! OOPS!!!
        <br />
        MOBILE VERSION NOT AVAILABLE
      </div>
    </div>
  );
}

export default App;
