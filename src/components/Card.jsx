/* eslint-disable react/prop-types */
function Card ({ itemName }) {
  return (
    <div className="item-card">
      <p>Image will go here</p>
      <span>{itemName}</span>
      <input type="number" defaultValue={1} />
      <button className='cart-add'>Add to cart</button>
    </div>
  )
}

export default Card
