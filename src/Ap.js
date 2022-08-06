import { React, useEffect } from 'react';
import * as d3 from 'd3';
import './Ap.css';

export default function Ap() {

  useEffect(() => {
    
    let dataSet = [
      {subject: "Dogs", count: "150"},
      {subject: "cats", count: "75"},
      {subject: "fish", count: "135"},
      {subject: "lion", count: "240"}
    ]
    d3.select('#pgraphs').selectAll('p').data(dataSet).enter().append('p').text(dt => dt.subject + ': ' + dt.count)

    const getMax = () =>{
      let max = 0 
      dataSet.forEach((dt)=>{
        if (dt.count > max) {
          max = dt.count
        }
      })
    }

    d3.select('#BarChart').selectAll('div').data(dataSet).enter().append('div').classed('bar', true).style('height', `${getMax()}px`)
    
    d3.select('#BarChart').selectAll('.bar').transition().duration(1000).style('height', bar => `${bar.count}px`).style('width', '80px').style('margin-right', '10px').delay(300)
    
  },[]);

  return (
    <div className='Ap'>
      <div id="pgraphs"></div>
      <div id="BarChart"></div>
    </div>
  )
}
