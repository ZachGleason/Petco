import React from 'react';
import '../Styles/Banner.css';
import Background from '../Assets/pets.webp'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner_left'>
            <p className='banner_text_one'>50% OFF</p>
            <p className='banner_text_two'>Your First Repeat Delivery Order On Select Brands</p>
            <div className='banner_button'>
                <p>SHOP NOW</p>
            </div>
        </div>
        <div className='banner_right'>
            {/* <img 
            src={Background}
            alt="background"
            className='background'
            center
            /> */}
        </div>
    </div>
  )
}

export default Banner