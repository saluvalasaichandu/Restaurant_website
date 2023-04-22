import CartIcon from "../Cart/CartIcon";
import classes from './HeaderButton.module.css';
import { useContext } from "react";
import cartContext from "../../Store/cartContext";
const HeaderButton=(props)=>{
    const cartcntx=useContext(cartContext);
    const numberofcartitems=cartcntx.items.reduce(
        (curnumber,item)=>{
    return (curnumber+item.amount);
    },0);



    return(<button className={classes.button} onClick={props.onClick}>
        <span className={classes.CartIcon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
    </button>);
}
export default HeaderButton;