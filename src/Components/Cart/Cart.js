import Model from '../UI/Model';
import classes from './Cart.module.css'
const Cart=(props)=>{
    const cartitems=<ul className={classes['cart-items']}>
        {[{id:'a1',name: 'Saichandu', amount: 2, price: 960}].map((item)=> <li>{item.name}</li>)}
        </ul>;
     return <Model onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>500</span>
        </div>

        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
        </div>
     </Model>
}
export default Cart;
