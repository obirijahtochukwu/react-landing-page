import React, { useState } from 'react';
import links from '../data';

export default function Navbar() {

  const [hash, setHash] = useState('#');
  window.location.hash = hash;

  return (
    <div className='desktop'>
      <div className="navbar bg-white">
        <div className="container">
          <h1 style={{textTransform:'uppercase', fontWeight: 'bolder', color: 'rgb(78, 8, 184)'}}>lunatix</h1>    
          <span>
            {links.map((link)=>{
              const {id, url, text } = link;
              return (
                <a key={id} href={url} onClick={()=> setHash(url)} className={`navbar-link p-3 my-0 mx-1 ${hash === url && 'active'}`}>{text}</a>
              )
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
