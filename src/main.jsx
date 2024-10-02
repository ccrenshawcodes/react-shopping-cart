//  external dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//  relative dependencies
import App from './App.jsx'
import './index.css'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'shop', element: <Shop />,},
      {path: 'cart', element: <Cart />,},
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
