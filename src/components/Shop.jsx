//  external dependencies

//  relative dependencies
import { useAllProducts } from '../utils/useAllProducts'
import Card from './Card'

function Shop () {
  const { storeData, error, loading } = useAllProducts();

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oops! An error occurred.</p>

  const productsArray = storeData.products.map(item => (
    <Card 
      itemName={item.title}
      itemPrice={item.price}
      itemImage={item.images[0]}
      inCart={false}
      key={item.id}
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
