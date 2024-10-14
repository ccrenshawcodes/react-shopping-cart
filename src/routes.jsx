//  external dependencies

//  relative dependencies
import App from './App.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'shop', element: <Shop />,},
      {path: 'cart', element: <Cart />,},
    ],
  },
];

export default routes;