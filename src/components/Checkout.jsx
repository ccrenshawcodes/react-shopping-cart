import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>Oops! I don't have a real checkout page.</p>
      <p>This was just a project I was working on.</p>
      <p>Sorry if you actually wanted to buy groceries from me :(</p>

      <p>Head back to your cart:</p>
      <Link to="/cart">
        <button>Back to cart</button>
      </Link>

      <p>Or, check out the code for this site!</p>
      <a
        target="_blank"
        href="https://github.com/ccrenshawcodes/react-shopping-cart"
      >
        <button>See the code on GitHub</button>
      </a>
    </div>
  );
}

export default Checkout;
