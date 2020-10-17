import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState, Meal as MealType } from '../store/types'
import { Login } from './Login';
import { Meal } from './Meal';

export const App: React.FC = () => {

  const { journalEntry } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const handleClick = (event: any) => {

  }

  return journalEntry === null ? <Login /> : (
    <main className="App">
      <div>{journalEntry.entryDate}</div>
      {
        journalEntry.meals.map((meal: MealType) => <Meal key={meal.name} meal={meal}/>)
      }
    </main>
  );
}
