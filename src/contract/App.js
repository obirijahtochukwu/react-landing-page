import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Sidebar from './navigation/Sidebar';
import Navbar from './navigation/Navbar';
import Home from './screens/Home';
import Team from './screens/team/Team';
import Contact from './screens/contact/Contact';
import News from './screens/news/News';
import About from './screens/about/About';

function App() {
  
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <Switch>
        <Route exact path='/'  component={Home}/>
        <Route path='/team'  component={Team}/>
        <Route path='/contact'  component={Contact}/>
        <Route path='/news'  component={News}/>
        <Route path='/about'  component={About}/>
      </Switch>
    </div>
  );
}

export default App;
