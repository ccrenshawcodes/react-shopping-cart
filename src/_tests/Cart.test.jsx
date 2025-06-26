//  external dependencies
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

//  relative dependencies
import Cart from "../components/Cart.jsx";
import Card from "../components/Card.jsx";
import { FakeOutletContext } from "./_mocks/FakeOutletContext.jsx";

describe("Cart page displays correct information", () => {
  const dummyData = [{
    itemName: 'pickles',
    itemPrice: 0.02,
    itemImage: null,
    itemId: 777,
    itemQty: 3,
  }];

  //  TODO why does it think the cart is empty when I'm clearly passing in data?
  //  why does it tell me it can't read the length of an empty array when I pass that in?
  it("displays empty cart message when no items are in the cart", () => {
    render(
      <FakeOutletContext context={dummyData}>
        <Cart />
      </FakeOutletContext>
);
    expect(screen.getByText("You have not added anything to your cart yet.")).toBeInTheDocument;
  });

  it.skip("does not display cards when no items are in the cart");

//  TODO why is the empty cart text rendering during this test??
  it("displays cards when items are in the cart", () => {
    render(
      <FakeOutletContext context={dummyData}>
        <Cart>
          <Card 
          itemName={dummyData[0].itemName}
          itemPrice={dummyData[0].itemPrice}
          itemImage={dummyData[0].itemImage}
          itemId={dummyData[0].itemId}
          itemQty={dummyData[0].itemQty}
          />
        </Cart>
      </FakeOutletContext>
    )
    expect(screen.getByText("pickles")).toBeInTheDocument();
  });
});
