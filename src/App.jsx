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
    1. Figure out the best way to fetch data
    2. Figure out the best way to render stuff based on fetched data; where to call?
    3. Handle errors
    4. Add loading state
    5. separate out fetching logic into a custom hook

    How to store info about which items are in the cart?
    How to ask the API for the specific products in the cart?
    Add something to Cart that will add a "remove from cart" button when
      the item is already in the cart
    

  TODO:
    -style cards
    -reinvent the wheel I mean input field (make it look good)
    -
*/