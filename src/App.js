import Header from "./Components/Layout/Header";
import { useState} from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/cartProvider";


function App() {
  const [cartShown,setcartShown]=useState(false);
  const showcartHandler=()=>{
    setcartShown(true);
  }
  const hidecartHandler=()=>{
    setcartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hidecartHandler} />}
      <Header onshowCart={showcartHandler} />
        <main>
        <Meals/>
        </main>
    </CartProvider>
    
  );
}

export default App;