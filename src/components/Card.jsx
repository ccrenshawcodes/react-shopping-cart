//  external dependencies
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

//  relative dependencies

function Card({
  itemName,
  itemPrice,
  itemImage,
  inCart = false,
  itemId,
  itemQty,
}) {
  const [localItemQty, setLocalItemQty] = useState(1);
  const [cartItems, setCartItems] = useOutletContext();

  function handleAddToCart() {
    const itemInfo = {
      itemName,
      itemPrice,
      itemImage,
      itemId,
      itemQty: Number(localItemQty),
    };
    const existingItem = cartItems.filter((item) => item.itemId === itemId);
    const otherItems = cartItems.filter((item) => item.itemId !== itemId);

    function addNewItem() {
      setCartItems((cartItems) => [...cartItems, itemInfo]);
    }

    function updateExistingItem() {
      Number(existingItem[0].itemQty += localItemQty);

      const newState =
        otherItems.length > 0 ? otherItems.concat(existingItem) : existingItem;
      setCartItems([...newState]);
    }

    existingItem.length > 0 ? updateExistingItem() : addNewItem();
  }

  function handleRemoveFromCart() {
    const remainingItems = cartItems.filter((item) => item.itemId !== itemId);
    setCartItems([...remainingItems]);
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
          min={1}
          defaultValue={itemQty}
          onChange={(e) => setLocalItemQty(Number(e.target.value))}
          disabled={inCart ? true : false}
        />

        {inCart ? (
          <button className="cart-remove" onClick={handleRemoveFromCart}>
            Remove from cart
          </button>
        ) : (
          <button className="cart-add" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  itemName: PropTypes.string,
  itemPrice: PropTypes.number,
  itemImage: PropTypes.string,
  inCart: PropTypes.bool,
  itemId: PropTypes.number,
  itemQty: PropTypes.number,
};
