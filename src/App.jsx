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
