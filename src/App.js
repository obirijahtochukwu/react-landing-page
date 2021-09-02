import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
