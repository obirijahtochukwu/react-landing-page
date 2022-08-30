import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'


export default function Scroll() {

  const data = [
    {id: 1, desc: 'Fair & Distributed Sale', img: '../../../../a8.png', title: 'Fair & Distributed Sale', paragraph:   `Gutter Cats were sold on the original Gutter Cat Gang website for 0.07 ETH + gas (no bonding curve or FOMO pricing)`},
    {id: 2, desc: 'Retain Full Ownership', img: '../../../../a9.png', title: 'Retain Full Ownership', paragraph: `You own the commercial rights to your Gutter Cat or Gutter Rat after purchase for as long as you retain ownership.`},
    {id: 3, desc: 'Gutter DAO Arrives', img: '../../../../a10.png', title: 'Gutter DAO Arrives', paragraph: `Now that all short term milestones have been achieved, it's time we focused on the long term future of the gang. Introducing, Gutter Cat Gang DAO: Born from the gutters, evolved for the world.`},
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-12 col-md-7 mb-5 pb-5">
            <h1 className='sub-title my-3 mx-4 mx-md-5'>OUR <span style={{backgroundImage: 'url(../../../t1.png) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">MAP</span></h1>
            <VerticalTimeline>
              {data.map(({id, title, img, paragraph, desc})=>{
                return (
                  <VerticalTimelineElement key={id} className='vertical-timeline position-relative w-100'
                   contentStyle={{background: '#0c1f30', color: 'white', border: 'transparent', padding: '0px'}} contentArrowStyle={{borderRight: 'transparent'}} iconStyle={{background: 'yellow'}} iconClassName='timeline-icon' icon={<FaNodeJs/>} lineColor={{color: 'green'}}>
                    <h3 className="vertical-timeline-element-title d-md-none">{title}</h3>
                    <p className='mb-3 timeline-text'>{paragraph}</p>
                    <img src={img} alt="" className="w-100 timeline-img" />
                    <div className="sub">
                      <h6 className='pb-0 mb-0 paragraphs'>0{id}</h6>
                      <h3 className="vertical-timeline-element-title">{desc}</h3>
                    </div>
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  )
}
