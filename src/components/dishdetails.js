import React,{useState}from 'react'
import Singledishdetail from './Singledishdetail';
import Axios from "axios";
const Dishdetails = ({detail}) => {
    const [show, setShow] = useState(false);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail.idMeal}`;
    console.log(detail)
   //const {strMeal,strMealThumb} = detail.
   const [mealdetails,setMealdetails] = useState({})
   const getmenudetails = async () =>{
       console.log(url)
    const result = await Axios.get(url);
    console.log("sumne" ,result.data.meals[0]);
    setMealdetails(result.data.meals[0])
   }
  
  return (
    <div className='recipe'>
        <h2>{detail.strMeal}</h2>
        <img src={detail.strMealThumb} alt={detail.strMeal}/>
        <button type = "button" class = "btn recipe-close-btn" onClick={()=> {getmenudetails()
        setShow(!show)}} id = "recipe-close-btn">
          <i class = "fas fa-times"></i>
          get meal detail
        </button>

       {show && < Singledishdetail mealdetails={mealdetails} />}
        </div>
    
        
  )
}

export default Dishdetails