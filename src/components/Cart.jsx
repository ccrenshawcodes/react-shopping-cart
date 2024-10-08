//  external dependencies

//  relative dependencies
import Card from './Card'
import { useSingleProduct } from '../utils/useSingleProduct'

function Cart () {
  const { storeData, error, loading } = useSingleProduct();

  if (error) return <p>Oops, an error occurred fetching your items :( </p>
  if (loading) return <p>Loading your cart...</p>

  const cartItemsArray = storeData.map(item => (
    <Card 
      itemName={item.title}
      itemPrice={item.price}
      itemImage={item.images[0]}
      inCart={false}
      key={item.id}
      itemId={item.id}
    />
  ))

  return (
    <div className="cart-page">
      Cart stuff will go here
      <div className="cart-items">
        {cartItemsArray}
      </div>
    </div>
  )
}

export default Cart 
