//  external dependencies
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

//  relative dependencies
import NavBar from './components/NavBar'

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <NavBar
        itemCount={cartItems.length}
      />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  )
}

export default App

/* 
  NEXT STEPS:
    -Write tests

    -Figure out how to display quantities on the cards in Cart

    -Figure out to add different quantities of items at once with the inputs

    -Add logic for "remove from cart" button to replace "add to cart" when
      card is displayed in the Cart...
      Plus an event listener for that button to mutate the Outlet context/actual items in cart
      Plus useSingleProduct needs the data as a dependency array so it re-runs when the data changes

    
    -Add pages:
      -Error page (you went to a bad URL)
      -Loading element
      -Error element (your API request had a problem. Reload page?)
      -Checkout page (ie "sorry I don't have one of these :)")?
    
    -Add additional handling for bad data getting returned in useSingleProduct, like what
      I have in useAllProducts
    

  NIT:
    -style cards
    -reinvent the wheel I mean input field (make it look good)
    -styles to indicate which tab you're on
    -animation to confirm when you've added something to your cart
    -make the navbar sticky?
*/