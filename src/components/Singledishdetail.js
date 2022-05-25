import React from 'react'

const Singledishdetail = (detail) => {
    console.log(detail.mealdetails)
    //const { label, image, url, ingredients } = detail;
    

  return (
    <ul className='ingredient-list'>
       <li className='ingredient-text'> <typography style={{fontWeight:'bold'}}>Name :</typography> {detail.mealdetails.strMeal} </li>
      <li className='ingredient-text'> <typography style={{fontWeight:'bold'}}>Categorie :</typography> {detail.mealdetails.strCategory} </li>
      <li className='ingredient-text'> <typography style={{fontWeight:'bold'}}>tags :</typography> {detail.mealdetails.strTags} </li>
      <li className='ingredient-text'> <typography style={{fontWeight:'bold'}}>Instruction :</typography> {detail.mealdetails.strInstructions} </li>

    </ul>
  )
}

export default Singledishdetail