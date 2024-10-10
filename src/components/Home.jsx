//  external dependencies
import { Link } from 'react-router-dom'

function Home () {
  return  (
    <div className="home-page">
      <h1>Fresh. Natural. Local.</h1>
      <h2>Support your local grocer!</h2>

      <div className="home-cta">
        <Link to='shop'>
          <button className='shop-button'>shop</button>
        </Link>
      </div>

      <a target="_blank" href="https://github.com/ccrenshawcodes/react-shopping-cart">
        <button>See the code on GitHub</button>
      </a>
    </div>
  )
}

export default Home
