/* eslint-disable react/prop-types */
function Card ({ 
    itemName = 'apple', 
    itemPrice = 2.99, 
    itemImage, 
    inCart = false, 
  }) {
  return (
    <div className="item-card">
      <img src={itemImage} />

      <div className="card-info">
        <span>{itemName}</span>
        <span>{itemPrice}/ea</span>
      </div>

      <div className="card-actions">
        <input type="number" defaultValue={1} />
        <button className='cart-add'>Add to cart</button>
        {inCart && 
          <button className='cart-remove'>Remove from cart</button>
        }
      </div>
    </div>
  )
}

export default Card
