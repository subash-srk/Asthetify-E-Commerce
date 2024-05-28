import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/women_sit.png'

function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>WHATS TRENDING THIS MONTH</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <div className='btn-1'><a href="">Check Now</a></div>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>

  )
}

export default Offers