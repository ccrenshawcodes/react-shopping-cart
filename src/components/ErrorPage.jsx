//  external dependencies
import { Link } from 'react-router-dom'

//  relative dependencies

function ErrorPage () {
  return (
    <div className="error-bad-page">
      <h2>Oops, looks like you got lost :(</h2>
      <p>Click here to return to familiar territory.</p>
      <Link to='/'>
        <button className="back-to-home">Go home</button>
      </Link>
    </div>
  )
}

export default ErrorPage