import React from 'react';
import '../Styles/Bottom.css';
import { FiMapPin } from 'react-icons/fi';
import { BsTruck } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Bottom = () => {
  return (
    <div className='bottom' >
        <div className='bottom_div'>
            <FiMapPin className='bottom_pin'/>
            <p className='bottom_text_one'>Your Store:</p>
            <p className='bottom_text_two'>Santa Rosa</p>
        </div>
        <div className='bottom_div_two'>
            <BsTruck className='bottom_truck'/>
            <p className='bottom_text_three'>Delivering to:</p>
            <p className='bottom_text_four'>95407</p>
        </div>
        {/* <div className='bottom_right'>
          <div className='one'>
            <p>Services</p>
            <RiArrowDropDownLine className='bottom_dropdown'/>
          </div>
          <div className='two'>
            <p>Rewards</p>
            <RiArrowDropDownLine className='bottom_dropdown'/>
          </div>
          <div className='three'>
            <p>Monthly Offers</p>
          </div>
        </div> */}
    </div>
  )
}

export default Bottom