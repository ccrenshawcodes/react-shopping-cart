//  external dependencies
import { Link } from 'react-router-dom'

function Home () {
  return  (
    <div className="home-page">
      <h1>WE BOTH KNOW</h1>
      <h1>YOU WANT CHEESE</h1>
      <Link to='shop'>
        <button className='shop-button'>SHOP</button>
      </Link>
    </div>
  )
}

export default Home
