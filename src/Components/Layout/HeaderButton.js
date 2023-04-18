import CartIcon from "../Cart/CartIcon";
import classes from './HeaderButton.module.css';
const HeaderButton=(props)=>{
    return(<button className={classes.button}>
        <span className={classes.CartIcon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
    </button>);
}
export default HeaderButton;