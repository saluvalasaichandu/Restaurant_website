import cartContext from "./cartContext";
const cartProvider=(props)=>{
    const additemtocart=(item)=>{

    }
    const removeitemfromcart=(id)=>{

    }
    const cartcontext={
        items:[],
        totalAmount:0,
        addItem:additemtocart,
        removeItem:removeitemfromcart
    };
    return(
    <cartContext.Provider value={cartContext}>
        {props.children}
    </cartContext.Provider>

    )
}
export default cartProvider;
