import React from 'react';
import { FaSearch, FaChevronDown, FaPlus, FaUserCircle, FaPencilAlt, FaChevronLeft } from "react-icons/fa";
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='container homepage my-4'>
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <input type="text" placeholder='Search Staff...' className='w-100 py-1 px-2' />
            <div style={{marginLeft: '1.5rem'}} className='hero-background px-2 py-1'>
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between my-4">
        <div className='d-flex align-items-center'>
          <div role='button' className="hero-background d-flex align-items-center py-2 px-2">
            <div>Sort By</div>
            <FaChevronDown style={{marginLeft: '2rem'}}></FaChevronDown>
          </div>
          <div role='button' className="hero-background d-flex align-items-center py-2 px-2 mx-5">
            <div>Designation</div>
            <FaChevronDown style={{marginLeft: '2rem'}}></FaChevronDown>
          </div>
        </div>
        <div role='button' className='d-flex align-items-center'>
          <FaPlus className='mx-1'/>
          <div>Add Staff</div>
        </div>
      </div>
      <section className='px-3 py-2'>
        <div className="row align-items-center">
          <div className="col-6">
            <div className='d-flex align-items-center justify-content-between '>
              <div className='d-flex align-items-center'>
                <div className="border"></div>
                <div style={{marginLeft: '1rem'}}>Full Name</div>
              </div>
              <div>Designination</div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <div  className='d-none d-md-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <FaUserCircle className='icon mx-2'/>
                <div>View Profile</div>
              </div>
              <div className='d-flex align-items-center py-2 px-2'>
                <FaPencilAlt className='icon mx-2'/>
                <div>Edit</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article className='px-3 py-2 article my-4'>
          <div className="row align-items-center">
            <div className="col-6">
              <div className='d-flex align-items-center justify-content-between '>
                <div className='d-flex align-items-center'>
                  <div className="border2">
                    <p className="text-center mt-1">Profile Picture</p>
                  </div>
                  <div style={{marginLeft: '1rem'}} className="text">Full Name</div>
                </div>
                <div className="text">Designination</div>
              </div>
            </div>
            <div className="col-1 visibility-hidden">
            </div>
            <div className="col-5">
              <div  className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <FaUserCircle className='icon mx-2'/>
                  <div>View Profile</div>
                </div>
                <div className='d-flex align-items-center py-2 px-2 hero-background'>
                  <FaPencilAlt className='icon mx-2'/>
                  <div>Edit</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 position-relative">
            <div className="col-6 mx-auto">
              <div className="mx-auto">
                <h6 className="mx-5 text px-md-3 px-lg-5">Personal Details</h6>
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-9">
                    <div className="custom-btn mb-3 px-2 py-1">building number</div>
                    <div className="custom-btn mb-3 px-2 py-1">city</div>
                    <div className="custom-btn mb-3 px-2 py-1">date of birth</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mx-auto align-self-end pt-1">
              <div className="row">
                  <div className="col-9 mx-auto">
                    <div className="custom-btn mb-3 px-2 py-1">Street</div>
                    <div className="custom-btn mb-3 px-2 py-1">Pin Code</div>
                    <div className="custom-btn mb-3 px-2 py-1">Date of Joining</div>
                  </div>
                  <div className="col-3"></div>
                </div>
            </div>
            <div className="position-absolute mx-lg-4"></div>
          </div>
          <div className="row my-4">
            <div className="col-6 mx-auto">
              <div className="mx-auto">
                <h6 className="mx-5 text px-md-3 px-lg-5">Bank Details</h6>
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-9">
                    <div className="custom-btn mb-3 px-2 py-1">Salary Amount</div>
                    <div className="custom-btn mb-3 px-2 py-1">Bank Name</div>
                    <div className="custom-btn mb-3 px-2 py-1">Account Number</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mx-auto align-self-end pt-1">
              <div className="row">
                  <div className="col-9 mx-auto">
                    <div className="custom-btn mb-3 px-2 py-1">IFSC Code</div>
                    <div className="custom-btn mb-3 px-2 py-1">Branch Name</div>
                  </div>
                  <div className="col-3"></div>
                </div>
            </div>
          </div>
      </article>
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div className="hero-btn px-5 mx-2 py-2">reset</div>
            <div className="hero-btn2 px-5 mx-2 py-2">safe</div>
          </div>
        </div>
      </div>
      <div className="position-fixed">
        <FaChevronLeft/>
      </div>
    </div>
  )
}
