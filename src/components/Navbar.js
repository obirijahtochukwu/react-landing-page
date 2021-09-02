import React from 'react';
import links from '../data';
import logo from '../images/logo.svg';


export default function Navbar() {
 return (
  <div className='navbar'>
   <div className="navbar">
    <img src={logo} alt="logo"/>
    <span className="navbar-link">
     {links.map((link)=>{
      const {id, url, text } = link;
      return (
       <a key={id} href={url}>{text}</a>
      )
     })}
    </span>
    <button className="button">request invite</button>
   </div>
  </div>
 )
}
