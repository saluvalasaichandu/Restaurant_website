import classes from './MealitemForm.module.css'
import Input from '../UI/Input';
const MealitemForm=(props)=>{
    return(
        <form className={classes.form}>
            <Input  
            label='Amount'
            input={{
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
            }}
            />
            <button>+Add</button>
        </form>
    )

}
export default MealitemForm;
