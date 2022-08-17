import React from 'react';
import '../Styles/Header.css';
import Logo from '../Assets/Logo.png';
import { VscAccount } from 'react-icons/vsc';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BsCart3 } from 'react-icons/bs';


const Header = () => {
    
  return (
    <div className='header'>
        <img 
        src={Logo}
        alt='logo'
        className='header_logo'
        />
        <div className='header_center'>
            <input type="text" className='header_input' placeholder='Search...'></input>
        </div>
        <div className='header_icons'>
            <div className='header_icon'>
                <VscAccount className='header_profile'/>
                <RiArrowDropDownLine className='header_dropdown'/>
                <div className='header_texts'>
                    <p>Account</p>
                </div>
            </div>
            <hr className='header_line'/>
            <div className='header_icon_two'>
                <BsCart3 className='header_cart'/>
            </div>
        </div>
    </div>
  )
}

export default Header;