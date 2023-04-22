import { Fragment } from "react";
import mealsimage from '../image/food.jpg';
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";
const Header=(props)=>{
    return <Fragment>
        <header className={classes.header}>
        <h1>Restaurant Meals</h1>
        <HeaderButton  onClick={props.onshowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage} alt='restaurant header image'></img>
        </div>


    </Fragment>
};
export default Header