//  external dependencies
import { Outlet } from 'react-router-dom'

//  relative dependencies
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar
        itemCount={3}
      />
      <Outlet />
    </>
  )
}

export default App

/* 
  NEXT STEPS:
    How to store info about which items are in the cart?
    How to ask the API for the specific products in the cart?
    Add something to Cart that will add a "remove from cart" button when
      the item is already in the cart
    

  TODO:
    -style cards
    -reinvent the wheel I mean input field (make it look good)
    -
*/