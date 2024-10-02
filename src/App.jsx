//  external dependencies
import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App

/* 
  NEXT STEPS:
    1. Set up a router - done :) 
    2. Create basic content for App/nav, Home, Shop and Cart - done :) 
    3. Explore the fake store API
    4. Figure out how I'm going to store state and fetch.
    5. Style.
*/