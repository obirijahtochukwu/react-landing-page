import React from 'react';
import phone from '../images/phone.png';
import online from '../images/online.svg';
import budget from '../images/budget.svg';
import onboard from '../images/onboard.svg';
import api from '../images/api.svg';
import plane from "../images/plane.jpg";
import currency from '../images/currency.jpg';
import resturant from '../images/resturant.jpg';
import confetti from '../images/confetti.jpg';
import logo from '../images/logo.svg'


export default function Content() {
 return (
  <>
   <div className="image-wrapper">
    <img src={phone} alt="" className="mobile-phone"/>
   </div>
   <div className="container-fluid">
    <div className="row bg-white pt-2">
     <div className="col-12 col-md-5 intro mx-auto">
      <h1>Next generation digital banking</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error magnam minus eum. Aspernatur eius cupiditate alias veritatis voluptatem quidem magni?</p>
      <button className="button">request invite</button>
     </div>
     <div className="col-12 col-md-6 mx-auto image-wrapper2">
      <div className="">
       <img src={phone} alt="" className="mobile-desktop"/>
      </div>
     </div>
    </div>
   </div>
    <div className="container">
     <div className="row intro">
     <h2 className="mt-4">Why choose Easybank?</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum accusamus quaerat debitis provident!</p>
     <div className="col-11 col-md-3">
      <img src={online} alt="online" className='mt-4 mb-4'/>
      <h5>online banking</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita nemo repellendus</p>
     </div>
     <div className="col-11 col-md-3">
      <img src={budget} alt="online" className='mt-4 mb-4'/>
      <h5>simple budget</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita nemo repellendus</p>
     </div>
     <div className="col-11 col-md-3">
      <img src={onboard} alt="online" className='mt-4 mb-4'/>
      <h5>fast onboarding</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita nemo repellendus</p>
     </div>
     <div className="col-11 col-md-3">
      <img src={api} alt="open Api" className='mt-4 mb-4'/>
      <h5>open api</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita nemo repellendus</p>
     </div>
    </div>
   </div>
   <div className="bg-white">
    <div className="container">
     <div className="row pt-5">
      <div className="col-11 col-md-5 col-lg-3 mx-auto">
       <div className="card">
        <img src={currency} alt="article" className='w-100'/>
        <div className="m-2">
         <h6>Recieve money in any currency with no fees</h6>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, illum?</p>
        </div>
       </div>
      </div>
      <div className="col-11 col-md-5 col-lg-3 mx-auto">
       <div className="card">
        <img src={resturant} alt="article" className='w-100'/>
        <div className="m-2">
         <h6>Recieve money in any currency with no fees</h6>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, illum?</p>
        </div>
       </div>
      </div>
      <div className="col-11 col-md-5 col-lg-3 mx-auto">
       <div className="card">
        <img src={plane} alt="article" className='w-100'/>
        <div className="m-2">
         <h6>Recieve money in any currency with no fees</h6>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, illum?</p>
        </div>
       </div>
      </div>
      <div className="col-11 col-md-5 col-lg-3 mx-auto">
       <div className="card">
        <img src={confetti} alt="article" className='w-100'/>
        <div className="m-2">
         <h6>Recieve money in any currency with no fees</h6>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, illum?</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <footer>
    <div className="container">
     <div className="row">
      <div className="col-12 col-md-3 foot-link mx-auto">
       <img src={logo} alt="logo"/>
      </div>
      <div className="col-12 col-md-3 foot-link mx-auto">
       <h6><a href="/home">About Us</a></h6>
       <h6><a href="/home">Contacts</a></h6>
       <h6><a href="/home">Blog</a></h6>
      </div>
      <div className="col-12 col-md-3 foot-link mx-auto">
       <h6><a href="/home">Carears</a></h6>
       <h6><a href="/home">Support</a></h6>
       <h6><a href="/home">Privacy Policy</a></h6>
      </div>
      <div className="col-12 col-md-3 foot-link mx-auto">
       <button className="button">request invite</button>
      </div>
     </div>
    </div>
   </footer>
  </>
 )
}
