import React from 'react';
import {FaHeart, FaSlack, FaThemeco, FaBattleNet, FaAngellist, FaCcVisa, FaMagento, FaMapMarkerAlt, FaSpeakerDeck, FaAtlas, FaGifts, FaChartBar, FaArrowAltCircleDown, FaCheckCircle, FaQuoteLeft, FaFacebook, FaInstagram, FaYoutubeSquare, FaTwitter } from "react-icons/fa";
import yoga3 from '../images/yoga1.png';
import yoga4 from '../images/t1.jpg';


export default function Content() {

  return (
    <>
      <header className='container-fluid'>
        <div className="row align-items-center position-relative">
          <div className="col-12 col-sm-5 mx-auto">
            <div className="ml-5 pt-3">
              <h5 className="m-color">best place for</h5>
              <h1 className="text-capitalize mt-1">reach your body goal at <b>lunatix.</b> </h1>
            </div>
            <p>
            
              We <b>believe</b> that the potential to achieve desired <b>health and wellness goals</b> within everyone.
            </p>
          </div>
          <div className="col-12 col-sm-6 position-relative">
            <img src={yoga3} alt="" className="yoga-img"/>
            <div className="location mt-1 mt-md-5 p-1">
              <FaMapMarkerAlt className='icon m-1 p-1'/>
              <span>Find some branches near you</span>
            </div>
          </div>
          <div className="brand p-0 m-0 d-none d-md-flex">
            <div className="brand-logos p-3 col-md-8">
              <span>
                <span className="text-primary">G</span>
                <span className="text-danger">o</span>
                <span className="text-success">o</span>
                <span className="text-primary">g</span>
                <span className="text-info">l</span>
                <span className="text-danger"> e</span>
              </span>
              <span>
                <FaCcVisa className='visa-icon'/> <span>Visa</span>
              </span>
              <span>
                <FaMagento className='mag-icon'/> <span>Magento</span>
              </span>
              <span>
                <FaSpeakerDeck id='services'  className='deck-icon'/> <span>Deck</span>
              </span>
            </div>  
          </div>
        </div>
      </header>

      <main className='container my-4'>
        <div className="row mt-4">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <h5 className="m-color">our services</h5> 
              <h1>the <b>Class</b> you get here. </h1>
            </div>
            <div className="col-12 col-sm-6">
              <p>Were <b>consistently</b> improving our offerings and services, and pride ourselves on <b>creating connections</b> with our members and delivering the most personalized fitness experience possible.</p>
            </div>
          </div>
          <div className="col-6 col-md-3 my-3">
            <div className="cardio p-3 mt-3 pt-4">
              <h4 className="text-capitalize">cardio strength</h4>
              <p>combining bodyWeight cardio with strength exercises.</p>
              <div className="cardio-icon px-2 pb-2">
                <FaAngellist/>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-3">
            <div className="basic p-3 pt-4 mt-3">
              <h4 className="text-capitalize">basic yoga</h4>
              <p>basic yoga movements for beginners.</p>
              <div className="basic-icon px-2 pb-2">
                <FaSlack/>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-3">
            <div className="muscle p-3 pt-4 mt-3">
              <h4 className="text-capitalize">muscle building</h4>
              <p>improve muscle mass with right exercises.</p>
              <div className="muscle-icon px-2 pb-2">
                <FaThemeco/>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-3">
            <div className="beginner p-3 pt-4 mt-3">
              <h4 className="text-capitalize">beginner pilates</h4>
              <p>Basic pilates movements for beginners.</p>
              <div className="beginner-icon px-2 pb-2">
                <FaBattleNet/>
              </div>
            </div>
          </div>
          <p id='features' className="text-center my-2">
            Challanges are oppurtinuty in disguise. <a href="/">View all Services</a>
          </p>
        </div>
      </main>
    
      <article className="container my-5">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-5 mx-auto my-2">
            <span className="d-flex align-items-center justify-content-between why my-2 p-2">
              <span className="text-capitalize text-bold">
                <FaHeart className='mx-2 text-danger'/>
                unique facilities.
              </span>
              <FaArrowAltCircleDown style={{color: 'rgb(78, 8, 184)'}}/>
            </span>
            <span className="d-flex align-items-center justify-content-between why my-2 p-2">
              <span className="text-capitalize text-bold">
                <FaChartBar className='mx-2 text-success'/>
                cost effective.
              </span>
              <FaArrowAltCircleDown style={{color: 'rgb(78, 8, 184)'}}/>
            </span>
            <span className="d-flex align-items-center justify-content-between why my-2 p-2">
              <span className="text-capitalize text-bold">
                <FaAtlas className='mx-2 text-primary'/>
                professional tutorial.
              </span>
              <FaArrowAltCircleDown style={{color: 'rgb(78, 8, 184)'}}/>
            </span>
            <span className="d-flex align-items-center justify-content-between why my-2 p-2">
              <span className="text-capitalize text-bold">
                <FaGifts className='mx-2 text-ligt'/>
                meal plans.
              </span>
              <FaArrowAltCircleDown style={{color: 'rgb(78, 8, 184)'}}/>
            </span>
          </div>
          <div className="col-12 col-md-5 mx-auto my-3">
            <h5 className="m-color">why lunatix?</h5>
            <h1>giving <b>good</b> health to good <b>people.</b></h1>
            <div className="d-flex">
              <button className="my-2 why-btn-1 p-2">learn more</button>
              <button id='products' className="my-2 why-btn-2 p-2 mx-4">contact us</button>
            </div>
          </div>
        </div>
      </article>

      <article className="my-5">
        <h5 className="m-color my-3 text-center">our pricing</h5>
        <h1 className="text-center">choose <b>your best</b> plan.</h1>
        <p className="text-center text-primary">Choose the that suits you.</p>
        <div className="container d-flex overflow-auto">
          <div className="col-10 col-sm-6 col-md-5 col-lg-3 mx-auto">
            <div className="plan">
              <h6><b>free plan</b></h6>
              <span className="amount">$0 </span>Forever free
              <div className=" d-flex align-items-center mx-auto">
                <FaCheckCircle className='plan-icon'/>
                <span>search places</span>
              </div>
              <div className="d-fle align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>limited places</span>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>1 user places</span>
              </div>
              <button className="plan-btn my-3">free trial</button>
            </div>
          </div>         
          <div className="col-10 col-sm-6 col-md-5 col-lg-3 mx-auto">
            <div className="plan">
              <h6><b>basic plan</b></h6>
              <span className="amount">$12 </span>/month
              <div className=" d-flex align-items-center mx-auto">
                <FaCheckCircle className='plan-icon'/>
                <span>filter places</span>
              </div>
              <div className="d-fle align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>unlimited places</span>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>5 user places</span>
              </div>
              <button className="plan-btn my-3">join now</button>
            </div>
          </div> 
          <div className="col-10 col-sm-6 col-md-5 col-lg-3 mx-auto">
            <div className="plan">
              <h6><b>professional plan</b></h6>
              <span className="amount">$49 </span>/Forever free
              <div className=" d-flex align-items-center mx-auto">
                <FaCheckCircle className='plan-icon'/>
                <span>all featured</span>
              </div>
              <div className="d-fle align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>exclusive places</span>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>free fitness shirts</span>
              </div>
              <button className="plan-btn my-3">join now</button>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-5 col-lg-3 mx-auto">
            <div className="plan">
              <h6><b>trainer plan</b></h6>
              <span className="amount">$69 </span>/Forever free
              <div className=" d-flex align-items-center mx-auto">
                <FaCheckCircle className='plan-icon'/>
                <span>all featured pro</span>
              </div>
              <div className="d-fle align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>exclusive places</span>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className='plan-icon'/>
                <span>free fitness shirts</span>
              </div>
              <button id='reviews' className="plan-btn my-3">join now</button>
            </div>
          </div>
        </div>
      </article>
      
      <div className="container">
        <div className="row my-4">
          <div className="col-11 col-md-6 mx-auto">
            <>
              <h5 className="m-color my-3"><FaQuoteLeft className='quote-l mr-5'/>member review</h5>              
              <h1>
                <i>
                  I've been to a few different <b>places</b> before but nothing <b>compares to this.</b>  
                </i> 
              </h1>
              <h1>
                <i>the flexible schedule is <b>great.</b></i> 
              </h1>
              <div className="d-flex align-items-center mt-3">
                <img src={yoga4} alt="member" className='mem-img'/>
                <span>
                  <b>Eimi Fukada</b>
                  <div className="text-muted">Lunatix Member</div>
                </span>
              </div>
            </>
          </div>
        </div>
      </div>
      
      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 col-sm-5 col-md-3 mx-auto">
              <h1 style={{textTransform:'uppercase', fontWeight: 'bolder', color: 'white'}}>lunatix</h1>
              <p className="my-3">
                We <b>believe</b> that the pontential to achieve desired <b>health and wellness goals</b> lies within everyone.
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <FaInstagram className='f-icon p-1'/>
                <FaFacebook className='f-icon p-1'/>
                <FaTwitter className='f-icon p-1'/>
                <FaYoutubeSquare className='f-icon p-1'/>
              </div>
            </div>
            <div className="col-10 col-sm-5 col-md-3 mx-auto">
              <h5 className="m-color my-3 text-capitalize text-white">about</h5>
              <p className="my-2 text-capitalize">about us</p>
              <p className="my-2 text-capitalize">features</p>
              <p className="my-2 text-capitalize">news & blogs</p>
              <p className="my-2 text-capitalize">why <b>lunatix?</b></p>
            </div>
            <div className="col-10 col-sm-5 col-md-3 mx-auto">
              <h5 className="m-color my-3 text-capitalize text-white">support</h5>
              <p className="my-2">fAQ</p>
              <p className="my-2 text-capitalize">support center</p>
              <p className="my-2 text-capitalize">contact us</p>
              <p className="my-2 text-capitalize">privacy policy</p>
            </div>
            <div className="col-10 col-sm-5 col-md-3 mx-auto">
              <h5 className="m-color my-3 text-capitalize text-white">contact us</h5>
              <p className="my-2 text-capitalize">services@Lunatix.io</p>
              <p className="my-2 text-capitalize">1901 thomas cri.</p>
              <p className="my-2 text-capitalize">terms and agrements</p>
              <p className="my-2 text-capitalize">emailUs</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
