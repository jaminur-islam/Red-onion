import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-heading'> 
      <div>       
      <h1 className='text-uppercase'> Best food waiting for your belly </h1>
      <input placeholder='Search food items' type="text" />
      <button> Search </button>
      </div>
      </div>
    </div>
  );
};

export default Banner;