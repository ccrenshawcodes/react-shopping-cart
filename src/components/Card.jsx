//  external dependencies
import { useState } from "react";
//  relative dependencies

/* eslint-disable react/prop-types */
function Card ({ 
    itemName, 
    itemPrice, 
    itemImage,
    inCart = false,
    itemId,
    onAdd,
  }) {
    const [itemQty, setItemQty] = useState(1);

    function handleClick () {
      onAdd(itemId, itemQty);
    }

  return (
    <div className="item-card">
      <img src={itemImage} />

      <div className="card-info">
        <span>{itemName}</span>
        <span>{itemPrice}</span>
      </div>

      <div className="card-actions">
        <input 
          type="number" 
          defaultValue={1} 
          onChange={e => setItemQty(e.target.value)}
        />

        <button 
          className='cart-add' 
          onClick={handleClick}
        >
          Add to cart
        </button>

        {inCart && 
          <button className='cart-remove'>Remove from cart</button>
        }
      </div>
    </div>
  )
}

export default Card
