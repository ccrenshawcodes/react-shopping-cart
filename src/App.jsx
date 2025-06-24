//  external dependencies
import { Outlet } from "react-router-dom";
import { useState } from "react";

//  relative dependencies
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <NavBar itemCount={cartItems.length} />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
}

export default App;

/* 
  NEXT STEPS:

    PROJECT REQUIREMENTS
      -Write tests

    NICE TO HAVE/BETTERMENTS
      -Store store items in local storage

  BUGS:
    -Navigating back to the Home page ("/" path) from the error element doesn't load the image
    -Accessing the Home page on netifly doesn't load the image either :( 

  NIT:
    -styles to indicate which tab you're on
    -animation to confirm when you've added something to your cart
    -disable "checkout" button unless there's something in the cart
    -dummyJSON link in README to open in a new tab
*/
