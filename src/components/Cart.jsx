//  external dependencies
import { useOutletContext, Link } from 'react-router-dom';
//  relative dependencies
import Card from './Card'
import { useSingleProduct } from '../utils/useSingleProduct'

function Cart () {
  const { cartData, error, loading } = useSingleProduct();
  const [cartItems, setCartItems] = useOutletContext();

  if (error) return <p>Oops, an error occurred fetching your items :( </p>
  if (loading) return <p>Loading your cart...</p>

  const handleRemoveFromCart = (id) => {
    const itemsWithRemoved = cartItems.filter((item) => item !== id);
    setCartItems([...itemsWithRemoved]);
  }

  const cartItemsArray = cartData ? (
    cartData.map(item => (
      <Card 
        itemName={item.title}
        itemPrice={item.price}
        itemImage={item.images[0]}
        inCart={true}
        key={item.id}
        itemId={item.id}
        onClick={handleRemoveFromCart}
      />))
    ) : (
      <p>You have not added anything to your cart yet.</p>
    )

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Cart</h2>

      <Link to='checkout'>
        <button>Checkout</button>
      </Link>

      </div>
      <div className="cart-items">
        {cartItemsArray}
      </div>
    </div>
  )
}

export default Cart 
