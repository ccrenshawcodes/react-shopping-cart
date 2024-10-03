//  external dependencies
import { Link } from 'react-router-dom'

function Home () {
  return  (
    <div className="home-page">
      <h1>we both know youre hungry.</h1>
      <Link to='shop'>
        <button className='shop-button'>shop</button>
      </Link>
    </div>
  )
}

export default Home
