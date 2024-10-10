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

    FUNCTIONALITY
      -Figure out how to display quantities on the cards in Cart
      -Remove from cart
        -"remove from cart" button replaces "add to cart" when card is viewed on cart page
        -"remove from cart" button mutates the items in cart data (outlet context)
        -useSingleProduct probably needs the data in a dependency array

    PROJECT REQUIREMENTS
      -Write tests

    NICE TO HAVE
      -Add pages:
        -Checkout page (ie "sorry I don't have one of these :)")?
      -Put routes into their own file

  BUGS:
    -Navigating back to the Home page ("/" path) from the error element doesn't load the image

  NIT:
    -styles to indicate which tab you're on
    -animation to confirm when you've added something to your cart
    -disable "checkout" button unless there's something in the cart
    -dummyJSON link in README to open in a new tab
*/