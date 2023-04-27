import classes from "./Mealitem.module.css";
import MealitemForm from "./MealitemForm";
import { useContext } from "react";
import cartContext from "../../Store/CartContext";
const Mealitem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  const cartCtx = useContext(cartContext);
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
        
      <div>
          {console.log(props)};
        <MealitemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default Mealitem;
