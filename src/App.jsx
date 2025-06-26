//  external dependencies
import { Outlet } from "react-router-dom";
import { useState } from "react";

//  relative dependencies
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function getCartItemCount() {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (total += item.itemQty));
    }
    return total;
  }

  const totalItems = getCartItemCount();

  return (
    <>
      <NavBar itemCount={totalItems} />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
}

export default App;
