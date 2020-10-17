import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState, Meal as MealType } from '../store/types'

type Props = {
  meal: MealType
}

export const Meal: React.FC<Props> = props => {

  const dispatch = useDispatch();

  const handleClick = (event: any) => {

  }

  return (
    <>
      <div className='mealHeader'>{props.meal.name}</div>
        {
          props.meal.foods.map(food => <>
            <span className='foodHeader'>{food.name}</span>
            <span className='macro'>Protein: {food.protein}</span>
            <span className='macro'>Carbs: {food.carbs}</span>
            <span className='macro'>Fats: {food.fats}</span>
          </>)
        }
    </>
  );
}
