import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css';
import { data } from "../data";

export default function Navbar() {
  return (
    <nav className='navbar py-0 my-0'>
      <div className="container-fluid bg-white">
        <div className="container d-flex justify-content-between align-items-center py-3 bg-white">
          <div className="logo">logo</div>
          <div><FaUserCircle className='nav-icon'/></div>
        </div>
      </div>
      <div className="container-fluid px-0 sidebar">
        <div className="sidebar-content w-100">
          <div className="text-center text-white my-3">
            <div>
              <FaUserCircle className='profile-icon mb-2'/>
            </div>
            <h5>Edit Profile</h5>
          </div>
          {data.map(({icon, text, subtext}, index)=>{
            return (
              <div key={index} className='mx-auto mb-2'>
                <div className={`${text === 'staff details' && 'active'} d-flex align-items-center px-4 sidebar-link py-2`}>
                  <div className='sidebar-icon my-0 py-0'>{icon}</div>
                  <div className='mx-2'>
                    <h5 className="bold-text my-0">{text}</h5>
                  </div>
                </div>
                <div className=" mt-0">
                  {subtext && subtext.map(({text}, index)=>{
                    return (
                      <p className='my-1 py-0 px-1 mx-5 subtext' key={index}>{text}</p>
                    )
                  })}

                </div>
              </div>
            )
          })}
          <div className='text-center my-5 pt3'>
            <button className="text-center logout-btn px-5 pb-1">
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
