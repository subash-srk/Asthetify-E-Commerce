import React from 'react'
import './Hero.css'
import hero_image from '../assets/Women_Fashion.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>HOLIDAY ESSENTIALS</h2>
            <div>
                <p>MAKE A SPLASH</p>
                <p></p>
            </div>
            <div class="btn-1">
                <a className="hero-btn" href="">LATEST COLLECTIONS</a>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero