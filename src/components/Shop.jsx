//  external dependencies
import { useOutletContext } from 'react-router-dom';

//  relative dependencies
import { useAllProducts } from '../utils/useAllProducts'
import Card from './Card'

function Shop () {
  const { storeData, error, loading } = useAllProducts();
  const [cartItems, setCartItems] = useOutletContext();

  const handleAddToCart = (id, quantity = 1) => {
    let counter = quantity;
    while (counter >0) {
      setCartItems(cartItems.concat(id));
      counter -= 1;
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oops! An error occurred.</p>

  const productsArray = storeData.products.map(item => (
    <Card 
      itemName={item.title}
      itemPrice={item.price}
      itemImage={item.images[0]}
      inCart={false}
      key={item.id}
      itemId={item.id}
      onAdd={handleAddToCart}
    />
  ))

  return (
    <div className="shop-page">
      <div className="products">
        {productsArray}
      </div>

    </div>
  )
}

export default Shop
