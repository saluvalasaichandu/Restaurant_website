import classes from'./MealsAvailable.module.css';
import Mealitem from './Mealitem';
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'brokoli',
      description: 'Finest fish and veggies',
      price: 250,
    },
    {
      id: 'm2',
      name: 'Chicken-Biryani',
      description: 'A Spicy Hyderabadi food!',
      price: 400,
    },
    {
      id: 'm3',
      name: ' Burger',
      description: 'American, raw, meaty',
      price: 280,
    },
    {
      id: 'm4',
      name: 'cool_drinks',
      description: 'soft drinks',
      price: 120,
    },
  ];

const MealsAvailable=()=>{
    const mealslist = DUMMY_MEALS.map((meal) => <Mealitem
    key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
    return<section className={classes.meals}>
        <Card>
        <ul>
          {mealslist}
        </ul>
        </Card>
    </section>

}
export default MealsAvailable;