import React from 'react';
import '../Styles/Top.css';
import Hills from '../Assets/Hills.png';



const Top = () => {
  return (
    <div className='top'>
        <img 
        src={Hills}
        alt='Hills_logo'
        className='top_image'
        />
        <p className='top_text'>FEEDING HILL'S HELPS FEED SHELTER PETS</p>
        <p className='top_text_two'> SHOP NOW</p>
    </div>
  )
}

export default Top