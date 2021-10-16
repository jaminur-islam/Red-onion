import { useEffect, useState } from "react"

const useFoodData = () =>{
  // food State
  const [foods , setFoods] = useState([]);

  // load food 
  useEffect(()=>{
    fetch('/foodData.json')
    .then(res=> res.json())
    .then(data => setFoods(data))
  },[])

  return [foods , setFoods];
}

export default useFoodData;