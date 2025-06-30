//  external dependencies
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

//  relative dependencies
import NavBar from "./components/NavBar";
import { useSyncLocalStorage } from "./utils/useSyncLocalStorage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const storage = JSON.parse(localStorage.getItem("cartItemsState"));
  useSyncLocalStorage(cartItems);

  useEffect(() => {
    if (storage !== null && cartItems.length <= 0) {
      setCartItems(storage);
    }
  }, []);

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
