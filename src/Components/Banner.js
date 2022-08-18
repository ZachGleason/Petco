import React from 'react';
import '../Styles/Banner.css';
import Logo from '../Assets/shopping.webp';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner_left'>
            <div className='banner_center'>
                <img 
                src={Logo}
                className='banner_logo'
                alt='logo'
                />
            </div>
        </div>
        <div className='banner_right'>
            <p className='banner_text_one'>STOCK UP AND SAVE</p>
            <p className='banner_text_one'>GET 10% OFF ORDERS $50+ WHEN YOU BUY ONLINE AND PICK UP IN STORES OR CURBSIDE</p>
            <div className='banner_flex'>
                <p className='banner_text_three'>Exclusions apply. Discount applied in cart.</p>
                <p className='banner_text_four'>See details</p>
            </div>
        </div>
    </div>
  )
}

export default Banner