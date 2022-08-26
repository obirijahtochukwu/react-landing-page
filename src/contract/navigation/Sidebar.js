import React, { useState } from 'react'
import { FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Sidebar() {

  const [sidebar, setSidebar] = useState(false);

  const links = [
    {text: 'about', url: '/about',id: 1},
    {text: 'team', url: 'team',id: 2},
    {text: 'news', url: 'news',id: 3},
    {text: 'contact', url: 'contact',id: 6}
  ];

  return (
    <div className='container-fluid mobile-nav py-3 d-md-none'>
      <div className="d-flex justify-content-between align-items-center px-2">
        <div>
          <img src="../../../logo.svg" alt="" />
        </div>
        <div onClick={()=> setSidebar(!sidebar)} style={{backgroundImage: 'url(../../../bar.svg)', backgroundColor: 'transparent', backgroundSize: 'cover'}}>
          <FaAlignRight style={{fontSize: '1.5rem', cursor: 'pointer'}} className='text-white m-3'/>
        </div>
      </div>

      <nav>
        <div className={sidebar ? "sidebar show px-5" : "sidebar"}>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="d-block">
              {links.map((link)=>{
                const {id, text, url} = link;
                return (
                  <Link onClick={()=> setSidebar(false)} to={url} className="container">
                    <MobileSidebar id={id} text={text}/>
                  </Link>
                )
              })}
            </div>
            <div>
              <div>
                <a href="https://opensea.io/collection/guttercatgang" className="my-2">
                  <img src="logo2.svg" alt="" width='28px' height='28px' className='my-3'/>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/guttercatgang" className="my-2">
                  <img src="logo5.svg" alt="" width='28px' height='28px' className='my-3' />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/guttercatgang_/" className="my-2">
                  <img src="logo3.svg" alt="" width='28px' height='28px' className='my-3'/>
                </a>
              </div>
              <div>
                <a href="https://guttercatgangdao.medium.com" className="my-2">
                  <img src="logo4.svg" alt="" width='28px' height='28px' className='my-3' />
                </a>
              </div>
              <div>
                <a href="https://discord.com/invite/guttercatgang" className="my-2">
                  <img src="logo6.svg" width='28px' height='28px' className='my-3' alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

const MobileSidebar = ({id, text}) =>{
  const [idText, setIdText] = useState(false);

  return (
    <div onMouseOut={()=> setIdText(false)} onMouseOver={()=> setIdText(true)} className='position-relative sidebar-links'>
      <h1 style={{backgroundImage: `${idText ? 'url(../../../logo.svg) ,linear-gradient(139deg, #ec9228, #b547f9)' : 'none'}`}} className={idText? "sidebar-link sidebar-link-hover" : "sidebar-link"}>{text}</h1>
      <span className={idText? "id id-hover" : "id"}>0{id}</span>
    </div>

  )
}