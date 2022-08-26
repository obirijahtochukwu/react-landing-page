import React from 'react';
import { FaAlignRight } from "react-icons/fa";
import './Nav.css'
import {Link} from 'react-router-dom'

export default function Navbar() {

  const [sidebar, setSidebar] = React.useState(false);

  const links = [
    {text: 'home', url: '/', id: 1},
    {text: 'the dao', url: '', id: 2},
    {text: 'adopt a cat', url: '', id: 3},
    {text: 'dao elements', url: '', id: 4},
  ];

  const urls = [
    {text: 'about', id: 1, url: '/about', img: '../../../svg6.png'},
    {text: 'team', id: 2, url: 'team', img: '../../../svg7.png'},
    {text: 'news', id: 3, url: 'news', img: '../../../svg8.png'},
    {text: 'contact', id: 6, url: 'contact', img: '../../../svg9.png'}
  ];

  return (
    <div className='navbar container-fluid py-3 px-5 d-none d-md-block'>
      <div className="topbar">
        <div className='float-left'>
          <img src="../../../logo.svg" alt="" />
        </div>
        <div className="float-left d-flex align-items-center justify-content-">
          {links.map(({text, id})=>{
            return (
              <div key={id} className='nav-link'>
                {text}
              </div>
            )
          })}
          <div onClick={()=> setSidebar(!sidebar)} style={{backgroundImage: 'url(../../../bar.svg)', backgroundColor: 'transparent', backgroundSize: 'cover'}} className='mx-2'>
            <FaAlignRight style={{fontSize: '1.5rem', cursor: 'pointer'}} className='text-white m-3'/>
          </div>
        </div>
      </div>

      <nav>
        <div className={sidebar ? "sidebar show px-5 py-5" : "sidebar"}>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="d-block">
              {urls.map((link)=>{
                const {id, text, url, img} = link;
                return (
                  <Link onClick={()=> setSidebar(false)} to={url} className="container">
                    <MobileSidebar id={id} text={text} img={img}/>
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


const MobileSidebar = ({id, text, img}) =>{
  const [idText, setIdText] = React.useState(false);

  return (
    <div onMouseOut={()=> setIdText(false)} onMouseOver={()=> setIdText(true)} className='position-relative sidebar-links'>
      
      <h1 style={{backgroundImage: `${idText ? 'url(../../../logo.svg) ,linear-gradient(139deg, #ec9228, #b547f9)' : 'none'}`, fontSize: '70px'}} className={idText? "sidebar-link sidebar-link-hover" : "sidebar-link"}>{text}</h1>
      <span className={idText? "id id-hover" : "id"}>0{id}</span>
      <img src={img} alt="" className={idText ? "img img-hover" : "img"} width='150px' height='200px' />
    </div>

  )
}