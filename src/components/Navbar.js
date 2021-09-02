import React from 'react';
import links from '../data';
import logo from '../images/logo.svg';


export default function Navbar() {
 return (
  <div className='desktop'>
   <div className="navbar">
    <img src={logo} alt="logo"/>
    <span>
     {links.map((link)=>{
      const {id, url, text } = link;
      return (
       <a key={id} href={url} className='navbar-link'>{text}</a>
      )
     })}
    </span>
    <button className="button">request invite</button>
   </div>
  </div>
 )
}
