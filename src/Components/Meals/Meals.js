import { Fragment } from 'react';

import Mealsinfo from './MealsInfo';
import MealsAvailable from './MealsAvailable';

const Meals = () => {
  return (
    <Fragment>
      <Mealsinfo />
      <MealsAvailable></MealsAvailable>
    </Fragment>
  );
};

export default Meals;