import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Food.css'

const FoodSection = () => {
  return (
    <div className='food-nav-bar container mt-4'>
      <ul>      
       <NavLink activeStyle={{color: 'red'}} to='/breakfast'> <li>Breakfast </li></NavLink>
       <Link to='/lunch'>   <li>Lunch</li> </Link>
       <Link to='/dinner'> <li>Dinner</li> </Link>
       </ul>
    </div>
  );
};

export default FoodSection;