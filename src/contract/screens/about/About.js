import React from 'react'
import './About.css';
import Scroll from './Scroll';
import  {data} from "../team/data";

export default function About() {
  return (
    <article>
      <div className="semi-container">
        <img src="../../../../a1.png" alt="" className="semi-circle-img" />
        
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10 col-md-6 position-relative mx-auto">
            <div className="semi-text">
              <h1 className="title"><span style={{backgroundImage: 'url(../../../t1.png) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">FIRST ENTIRELY DECENTRALIZED NFT-BACKED ORGANIZATIONS</span></h1>
              <p className="timeline-text mb-5 pb-5">It has been created with you, the community, in mind. Gutter Cat Gang NFT holders are the true owners of DAO and deserve to have a in how it operates.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid mt-5 pt-5">
        <div className="row mt-5 py-5">
          <div className="col-11 col-md-4 mx-auto mb-5">
            <h1 className="title">OUR <span style={{backgroundImage: 'url(../../../t1.png) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">VISION</span></h1>
            <p className="timeline-text">Create an streamlined and effective governance system for all of our NFT holders by implementing a voting mechanism within the DAO smart-contract itself. This means that if we want to bring change to the rules, or modify our current roadmap, members will be able to cast their vote directly from their wallet on to the blockchain.</p>
            <div className="hero-btn py-3 my-5">Our DAO Article</div>
          </div>
          <div className="col-11 col-md-6 mx-auto">
            <table>
              <tr>
                <th>DAO</th>
                <th>A Traditional Organisation</th>
              </tr>
              <tr>
                <td>Usually flat, and fully democratized.</td>
                <td>Usually hierarchical.</td>
              </tr>
              <tr>
                <td>Voting required by members for any changes to be implemented.</td>
                <td>Depending on structure, changes can be demanded from a sole party, or voting may be offered.</td>
              </tr>
              <tr>
                <td>Votes tallied, and outcome implemented automatically without trusted intermediary.</td>
                <td>If voting allowed, votes are tallied internally, and outcome of voting must be handled manually.</td>
              </tr>
              <tr>
                <td>Services offered are handled automatically in a decentralized manner (for example distribution of philanthropic funds).</td>
                <td>Requires human handling, or centrally controlled automation, prone to manipulation.</td>
              </tr>
              <tr>
                <td>All activity is transparent and fully public.</td>
                <td>Activity is typically private, and limited to the public.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-5 mx-auto">
            <div className="w-100">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 872 872" preserveAspectRatio="xMidYMid meet" width="872" height="872" style={{width: '100%', height: '100%'}} className='svg'>
              <defs>
                <clickPath id="__lottie_element_8">
                  <rect width="872" height="872" x="0" y="0"></rect>
                </clickPath>
                <image href='../../../../a2.png'></image>
                <image href='../../../../a3.png'></image>
                <image href='../../../../a4.png'></image>
                <image href='../../../../a5.png'></image>
              </defs>
              <g clip-path="url(#__lottie_element_8)">
                <g  opacity="1" style={{display: 'block'}}>
                  <rect height="872" width="872" fill="#0c1f30"></rect>
                </g>
                <g className='png' opacity="1" style={{display: 'block'}}>
                  <image href='../../../../a2.png' width="874px" height="874px" preserveAspectRatio="xMidYMid slice"></image>
                </g>
                <g  className='png' opacity="1" style={{display: 'block'}}>
                  <image href='../../../../a3.png' width="874px" height="874px" preserveAspectRatio="xMidYMid slice"></image>
                </g>
                <g  className='png' opacity="1" style={{display: 'block'}}>
                  <image href='../../../../a4.png' width="874px" height="874px" preserveAspectRatio="xMidYMid slice"></image>
                </g>
                <g className='png' opacity="1" style={{display: 'block'}}>
                  <image href='../../../../a5.png' width="874px" height="874px" preserveAspectRatio="xMidYMid slice"></image>
                </g>
              </g>
            </svg>
            </div>
          </div>
          <div className="col-11 col-md-5 mx-auto my-5">
            <h1 className='sub-title my-3'>DYNAMIC <span style={{backgroundImage: 'url(../../../t1.png) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">NATURE</span></h1>
            <h6 className="timeline-text">One of the most interesting aspects of DAO governance is its dynamic nature. The rules, perimeters and boundaries are always in flux as they adapt to new technologies or changes in circumstances that help avoid otherwise inevitable corruptive influences.</h6>
          </div>
        </div>
        <div className="row my-5 py-md-5">
          <div className="col-11 col-sm-11 mx-auto">
            <img src="../../../../a13.png" alt="" className="w-100" />
            <h1 className='title my-3'>GROWTH <span style={{backgroundImage: 'url(../../../t1.png) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">PRIORITIES</span></h1>
          </div>
        </div>
      </div>
      <Scroll/>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-11 col-md-3 mx-auto my-4 my-md-0">
            <h5 className="mb-0 pb-0 timeline-text">Meet our multi-skilled</h5>
            <h1 className='title mt-0 pb-0'><span style={{backgroundImage: 'url(../../../t1.png) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">TEAM</span></h1>
          </div>
          <div className="col-11 col-md-5 mx-auto">
            <p className="text-white">At Gutter Cat Gang DAO, our strength lies in our diversity: our many talents constantly challenge themselves to master the art of talking to audiences. Together, they craft bold & proprietary creative answers.</p>
          </div>
          <div className="d-flex overflow-auto">
            {data.map(({img, text}, index)=>{
              return (
                <Member key={index} img={img} text={text}/>
              )
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5 py-5">
        <div className="col-11 col-md-9 col-lg-6">
          <h6 className='timeline-text'><b>Have a unique idea you want to pitch to the DAO?</b></h6>
          <h1 className="title mt-0 pb-0">
            <span style={{backgroundImage: 'url(../../../logo.svg) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">GET IN TOUCH</span>
          </h1>
          <div className="b-bottom mx-2"></div>
        </div>
      </div>
      <hr />
      <footer>
        <div className="d-md-flex d-block justify-content-around align-items-center py-3">
          <div> 
            <img className='my-2 mx-2' src="../../../logo.svg" alt="" />
          </div>
          <h5 className='my-2 mx-2 text-muted footer-link'>HOME</h5>
          <h5 className='my-2 mx-2 text-muted footer-link'>THE DAO</h5>
          <h5 className='my-2 mx-2 text-muted footer-link'>ADOPT CAT</h5>
          <h5 className='my-2 mx-2 text-muted footer-link'>DAO ELEMENTS</h5>
        </div>
        <hr />
      </footer>
      </div>
    </article>
  )
}

const Member = ({img, text}) =>{
  const [hover, setHover] = React.useState(false);

  return (
    <div className="col-5 col-md-4 mx-auto my-3 px-1 py-1">
      <div onMouseOut={()=> setHover(false)} onMouseOver={()=> setHover(true)} className="position-relative">
        <img src={img} alt="" className='w-100 img-team' height='250px'/>
        <h6 className={hover ? "team-name show position-absolute" : "team-name position-absolute"}>{text}</h6>
      </div>
    </div>
  )
}








