//  external dependencies
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
//  relative dependencies

/* eslint-disable react/prop-types */
function Card ({ 
    itemName, 
    itemPrice, 
    itemImage,
    inCart = false,
    itemId,
    onClick,
  }) {
    const [itemQty, setItemQty] = useState(1);
    const [cartItems] = useOutletContext();

    function handleClick () {
      if (inCart) {
        onClick(itemId);
      } else {
        onClick(itemId, itemQty);
      }
    }

    function getNumOfItems () {
      if (inCart) {
        const howManyItems = cartItems.filter((item) => item === itemId);
        return howManyItems.length;
      } else {
        return 1;
      }
    }

  return (
    <div className="item-card">
      <img src={itemImage} />

      <div className="card-info">
        <span>{itemName}</span>
        <span>${itemPrice}</span>
      </div>

      <div className="card-actions">
        <input 
          type="number" 
          defaultValue={getNumOfItems()} 
          onChange={e => setItemQty(e.target.value)}
          disabled={inCart ? true : false}
        />

        {inCart 
          ? (
          <button 
            className='cart-remove'
            onClick={handleClick}
          >
            Remove from cart
          </button>
          ) : (
            <button 
              className='cart-add' 
              onClick={handleClick}
            >
              Add to cart
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Card
