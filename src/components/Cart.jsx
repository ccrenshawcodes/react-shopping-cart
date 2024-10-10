//  external dependencies

//  relative dependencies
import Card from './Card'
import { useSingleProduct } from '../utils/useSingleProduct'

function Cart () {
  const { cartData, error, loading } = useSingleProduct();

  if (error) return <p>Oops, an error occurred fetching your items :( </p>
  if (loading) return <p>Loading your cart...</p>

  const cartItemsArray = cartData ? (
    cartData.map(item => (
      <Card 
        itemName={item.title}
        itemPrice={item.price}
        itemImage={item.images[0]}
        inCart={false}
        key={item.id}
        itemId={item.id}
      />))
    ) : (
      <p>You have not added anything to your cart yet.</p>
    )

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <a target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <button>Checkout</button>
        </a>

      </div>
      <div className="cart-items">
        {cartItemsArray}
      </div>
    </div>
  )
}

export default Cart 
