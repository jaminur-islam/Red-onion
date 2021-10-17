import React from 'react';
import useFoodData from '../../../Hooks/useFoodData';

const Dinner = () => {
  const [foods , setFoods] = useFoodData();
   
  const breakfastFoods = foods.filter(fd => fd.food === 'dinner');

  return (
    <div className='row mt-2'>
      {
        breakfastFoods.map(breakfastFood => {
          const {name , id ,img , dream , price} = breakfastFood; 
          
         return(
           <div key={id} className='col-lg-4 col-md-6 col-12 text-center'>
             <div className='border m-4 p-4 foodCard'>
               <img width='150' src={img} alt="" />
               <h6 className='mt-2'> {name}</h6>
               <p>{dream}</p>
               <h5> Price : {price}</h5>
             </div>
           </div>
         ) 
        })
      }
    </div>
  );
};



export default Dinner;