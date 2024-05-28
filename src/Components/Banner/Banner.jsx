import React from 'react'
import './Banner.css'

function Banner(props) {
  return (
    <div className='banner'>
        <div className="banner-left">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <div className='btn-1'>
                <a href="">Explore Now</a>
            </div>
        </div>
        <div className="banner-right">
            <img src={props.image} alt="" />
        </div>
    </div>
  )
}

export default Banner