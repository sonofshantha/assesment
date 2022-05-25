import React, {useState} from 'react';
import logo from './logo.svg';
import Axios from "axios";
import './App.css';
import Dishdetails from './components/dishdetails';

function App() {

  const [query,setQuery]=useState('');
  const [details,setDeatils]=useState([]);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result)
    setDeatils(result.data.meals)
    setQuery("")
  }
  const onSubmit =(e)=>{
   e.preventDefault();
   getData();
  }
  const onChange =(e)=>{
    setQuery(e.target.value)
  }
  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
      <form className='search-form' onSubmit={onSubmit}>
      <input type='text' placeholder='Search Food' autoComplete='off' value={query} onChange={onChange}/>
      <input type='submit' value='search'></input>
      </form>
      <div className='recipes'>
     {details !==[] && details.map(detail =>
     <Dishdetails detail={detail}/> 
       
     )}

      </div>
      
    </div>
  );
}

export default App;
