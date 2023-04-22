import Header from "./Components/Layout/Header";
import { Fragment, useState} from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartShown,setcartShown]=useState(false);
  const showcartHandler=()=>{
    setcartShown(true);
  }
  const hidecartHandler=()=>{
    setcartShown(false);
  }

  return (
   <Fragment>
      {cartShown && <Cart onClose={hidecartHandler} />}
      <Header onshowCart={showcartHandler} />
        <main>
        <Meals/>
        </main>
      
    </Fragment>
  );
}

export default App;