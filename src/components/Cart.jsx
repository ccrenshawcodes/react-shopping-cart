//  external dependencies
import { useOutletContext, Link } from "react-router-dom";
//  relative dependencies
import Card from "./Card";
import { useSingleProduct } from "../utils/useSingleProduct";

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  const cartItemsArray = cartItems ? (
    cartItems.map((item) => (
      <Card
        itemName={item.title}
        itemPrice={item.price}
        itemImage={item.images[0]}
        inCart={true}
        key={item.id}
        itemId={item.id}
        onClick={handleRemoveFromCart}
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
