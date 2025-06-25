import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

//  relative dependencies
import Cart from "../components/Cart.jsx";

describe.skip("Cart page displays correct information", () => {
  it("displays empty cart message when no items are in the cart", () => {
    render(<Cart />);
    expect(screen.getByText("You have not added anything to your cart yet."));
  });

  it("does not display cards when no items are in the cart");

  it("displays cards when items are in the cart");
});
