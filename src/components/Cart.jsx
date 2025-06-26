//  external dependencies
import { useOutletContext, Link } from "react-router-dom";
//  relative dependencies
import Card from "./Card";

function Cart() {
  const [cartItems] = useOutletContext();
  const cartIsNotEmpty = cartItems.length > 0;

  function calculatePrice() {
    let total = 0;
    if (cartIsNotEmpty) {
      cartItems.map((item) => (total += item.itemPrice * item.itemQty));
    }
    return total.toFixed(2);
  }

  const totalPrice = calculatePrice();

  const cartItemsArray = cartIsNotEmpty ? (
    cartItems.map((item) => (
      <Card
        itemName={item.itemName}
        itemPrice={item.itemPrice}
        itemImage={item.itemImage}
        inCart={true}
        key={item.itemId}
        itemId={item.itemId}
        itemQty={item.itemQty}
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
          <button>Checkout {cartIsNotEmpty && ` - ${totalPrice}`}</button>
        </Link>
      </div>
      <div className="cart-items">{cartItemsArray}</div>
    </div>
  );
}

export default Cart;
