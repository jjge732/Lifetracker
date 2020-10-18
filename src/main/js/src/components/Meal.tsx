import React from 'react';
import { useDispatch } from "react-redux";

import { ApplicationState, Meal as MealType } from '../store/types'

type Props = {
  meal: MealType
}

export const Meal: React.FC<Props> = props => {

  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    alert('Display Food Model')
  }

  return (
    <div className='mealContainer'>
      <div className='mealHeader'>{props.meal.name}</div>
      {
        props.meal.foods.map(food => <>
          <span key={food.name} className='foodHeader'>{food.name}</span>
          <span key={`${food.name}-protein`} className='macro'>Protein: {food.protein}</span>
          <span key={`${food.name}-carbs`} className='macro'>Carbs: {food.carbs}</span>
          <span key={`${food.name}-fats`} className='macro'>Fats: {food.fats}</span>
        </>)
      }
      <button onClick={handleClick}>Add Food</button>
    </div>
  );
}
