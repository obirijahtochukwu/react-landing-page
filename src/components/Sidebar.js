import React, { useState } from 'react';
import links from '../data';
import { FaBars } from 'react-icons/fa';


export default function Sidebar() {

 const [sidebar, setSideber] = useState(false);

 const openSidebar = () =>{
  setSideber(true);
 };

  const closeSidebar = () =>{
    setSideber(false);
  };

  const [hash, setHash] = useState('#');
  window.location.hash = hash;

  return (
    <>
      <div className="sidebar container bg-white">
        <div className="sidebarheader py-3">
          <i style={{textTransform:'uppercase', fontWeight: 'bolder', color: 'rgb(78, 8, 184)'}}>lunatix</i>      
          <button onClick={openSidebar}>
          <FaBars/>
          </button>
        </div>
      </div>
      <div className={sidebar ? 'modal-wrapper show' : 'modal-wrapper'}>
        <div className="modal-content">
          <button className="closebtn" onClick={closeSidebar}>❌</button>
          {links.map((link)=>{
            const {id, url, text} = link;
            return (
              <div key={id} className="link" onClick={closeSidebar}>
                <a href={url} onClick={()=> setHash(url)} className={`a ${hash === url && 'active'}`}>{text}</a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}