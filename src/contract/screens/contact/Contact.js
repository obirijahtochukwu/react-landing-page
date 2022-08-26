import React, {useEffect} from 'react';
import { FaArrowLeft } from "react-icons/fa";
import './Contact.css';

export default function Contact() {

  const [proposalIndex, setProposalIndex] = React.useState(0);
  const [y, setY] = React.useState(window.scrollY)

  const forward = () =>{
    if (proposalIndex === 4) {
      setProposalIndex(0);
    } else {
      setProposalIndex(proposalIndex + 1)
    }
  };
  const nav =(e)=>{
    const window = e.currentTarget;
    if(y > window.scrollY){
      setProposalIndex(proposalIndex - 1)
    }
    else if (y < window.scrollY){
      forward()
      
    }
    setY(window.scrollY)

  }
  useEffect(() => {
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {
    window.addEventListener('scroll', (e)=> nav(e));
  
    return () => {
      window.removeEventListener('scroll', (e)=> nav(e))
    }
    // eslint-disable-next-line
  }, [y])
  
  


  const proposal = [
    {indicator: 'bar', content:  <input type='text' placeholder='Type your full name here' className='proposal-input py-5 w-100'/>},
    {indicator: 'bar', content:  <input type='text' placeholder='Type your e-mail address here' className='proposal-input py-5 w-100'/>},
    {indicator: 'bar', content:  <input type='text' placeholder='Type your FTH address here' className='proposal-input py-5 w-100'/>},
    {indicator: 'bar', content:  <div>
      <h5  className='hero-title mb-4'>Do you own a Gutter Cat?</h5>
      <span type='button' className='question-btn p-4 mx-2'>Yes!</span>
      <span type='button' className='question-btn p-4 mx-2'>No.</span>
    </div>},
    {indicator: 'bar', content:  <input type='text' placeholder='Write your proposal here' className='proposal-input py-5 w-100'/>},
  ];

  return (
    <article style={{height: '200vh'}} className='container text-center'>
      <h1 className="title">DAO <span style={{backgroundImage: 'url(../../../logo.svg) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">PROPOSAL</span></h1>
      <h6 className="paragraphs">Have a unique idea/project you want to pitch to the DAO?</h6>
      <div className="row my-5">
        <div className="col-12 text-center">
          {proposal.map(({content}, index)=>{
            if(proposalIndex === index) {
              return (
                <div className='proposal show' key={index}>
                  <div>{content}</div>
                </div>
              )
            }
            return null;
          })}
          <button onClick={()=> forward()} className=" position-fixed btn-proposal w-75 py-3" disabled={proposalIndex === 4 && true}>continue</button>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center my-4">
            <div>
              <FaArrowLeft onClick={()=> setProposalIndex(proposalIndex - 1)} className={proposalIndex === 0 ? 'back-btn mx-1 invisible' : 'back-btn mx-1'}/>
            </div>
            <div className='d-flex'>
              {proposal.map((props,index)=>{
                return (
                  <div className={proposalIndex === index ? "bar show mx-1" : "bar mx-1"}></div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
