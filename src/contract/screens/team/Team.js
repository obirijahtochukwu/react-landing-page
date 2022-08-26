import React from 'react';
import {data} from './data';
import './Team.css';

export default function Team() {
  return (
    <section>
      <div className="container-fluid">

        {/* MOBILE VIEW*/}
        <div className="row mb-5 d-lg-none">
          {data.map(({img, text}, index)=>{
            return (
              <Member key={index} img={img} text={text}/>
            )
          })}
        </div>

        {/* DESKTOP VIEW*/}
        <div className="d-none d-team-container d-lg-block">
          <div className='desktop-team row'>
            {data.map(({img, text}, index)=>{
              return (
                <DesktopMember key={index} img={img} text={text}/>
              )
            })}
          </div>
        </div>
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
    </section>
  )
}

const Member = ({img, text}) =>{
  const [hover, setHover] = React.useState(false);

  return (
    <div className="col-6 col-md-4 mx-auto my-3">
      <div onMouseOut={()=> setHover(false)} onMouseOver={()=> setHover(true)} className="position-relative">
        <img src={img} alt="" className='w-100 img-team' height='250px'/>
        <h6 className={hover ? "team-name show position-absolute" : "team-name position-absolute"}>{text}</h6>
      </div>
    </div>
  )
}


const DesktopMember = ({img, text}) =>{
  const [hover, setHover] = React.useState(false);
  
  return (
    <div className="col-2 mx-auto my-3">
      <div onMouseOut={()=> setHover(false)} onMouseOver={()=> setHover(true)} className="position-relative">
        <img src={img} alt="" className='w-100 img-team' height='250px'/>
        <h6 className={hover ? "team-name show position-absolute" : "team-name position-absolute"}>{text}</h6>
      </div>
    </div>
  )
}