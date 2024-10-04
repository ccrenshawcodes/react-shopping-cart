/* eslint-disable react/prop-types */
//  external dependencies
import { Link } from 'react-router-dom'

function NavBar ({ itemCount }) {
  return (
    <div className="nav-bar">
      <div className="nav-tabs">
        <div className="home-tab">
          <Link to='/'>home</Link>
        </div>

        <div className="shop-tab">
          <Link to='shop'>shop</Link>
        </div>
      </div>

    <div className="cart-button">
      <Link to='cart'>cart({itemCount})</Link>
    </div>

    </div>
  )
}

export default NavBar
