import React, { Component } from 'react'
import { courses } from './Data'
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <>
        <h2 className='head'>Trending Courses</h2>
        <div className='main'>
            {
                courses.map((details)=>{
                    return(
                        <div className='card'>
                        <h2>{details.courseName}</h2>
                        <ul>
                        {
                          details.technologies.map((course)=>{
                            return(
                              <li key={course}>{course}</li>
                            )
                          })
                        }</ul>
                        <p>Completion : {details.duration}</p>
                        <p>Price : {details.fees}</p>
                        <p>Reviews - {details.rating}</p>
                        </div>
                    )
                })
            }
        </div>
      </>
    )
  }
}

