//  external dependencies
import { useOutletContext, Link } from "react-router-dom";
//  relative dependencies
import Card from "./Card";
import { useSingleProduct } from "../utils/useSingleProduct";

function Cart() {
  const [cartItems,] = useOutletContext();

  const cartItemsArray = cartItems ? (
    cartItems.map((item) => (
      <Card
        itemName={item.itemName}
        itemPrice={item.itemPrice}
        itemImage={item.itemImage}
        inCart={true}
        key={item.itemId}
        itemId={item.itemId}
      />
    ))
  ) : (
    <p>You have not added anything to your cart yet.</p>
  );

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Cart</h2>

        <Link to="checkout">
          <button>Checkout</button>
        </Link>
      </div>
      <div className="cart-items">{cartItemsArray}</div>
    </div>
  );
}

export default Cart;
