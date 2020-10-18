import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState, Meal as MealType } from '../store/types'
import { UserForm } from './UserForm';
import { Meal } from './Meal';

export const App: React.FC = () => {

  const { journalEntry } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    alert('display new meal form')
  }

  return journalEntry === null ? <UserForm /> : (
    <main className="App">
      <div>{journalEntry.entryDate}</div>
      {
        journalEntry.meals.map((meal: MealType) => <Meal key={meal.name} meal={meal}/>)
      }
      <button onClick={handleClick}>Add Meal</button>
    </main>
  );
}
