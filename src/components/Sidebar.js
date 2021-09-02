import React, { useState } from 'react';
import logo from '../images/logo.svg';
import farbar from '../images/farbar.svg';
import links from '../data';


export default function Sidebar() {

 const [sidebar, setSideber] = useState(false);

 const openSidebar = () =>{
  setSideber(true);
 };

 const closeSidebar = () =>{
  setSideber(false);
 };

  return (
    <>
      <div className="sidebar">
        <div className="sidebarheader">
          <img src={logo} alt="logo"/> 
          <button onClick={openSidebar}>
            <img src={farbar} alt=""/>
          </button>
        </div>
      </div>
      <div className={sidebar ? 'modal-wrapper show' : 'modal-wrapper'}>
        <div className="modal-content">
          <button className="closebtn" onClick={closeSidebar}>❌</button>
          {links.map((link)=>{
            const {id, url, text} = link;
            return (
              <div className="link">
                <a href={url} className='a'>{text}</a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

               