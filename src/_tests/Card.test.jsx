//  external dependencies
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//  relative dependencies
import Card from "../components/Card.jsx";
import { FakeOutletContext } from "./_mocks/FakeOutletContext.jsx";

const dummyData = [{
  itemName: 'pickles',
  itemPrice: 0.02,
  itemImage: null,
  itemId: 777,
  itemQty: 3,
}];

describe("Card element displays and behaves correctly", () => {
  it("displays the right title on the Card", () => {
    render(
      <FakeOutletContext context={dummyData}>
        <Card 
          itemName={dummyData[0].itemName}
          itemPrice={dummyData[0].itemPrice}
          itemImage={dummyData[0].itemImage}
          itemId={dummyData[0].itemId}
          itemQty={dummyData[0].itemQty}
        />
      </FakeOutletContext>
    );
    expect(screen.getByText("pickles"));
  });

  it.skip('performs onClick function when "add to cart" is clicked', async () => {
    const user = userEvent.setup();

    render(
      <FakeOutletContext context={dummyData}>
        <Card 
          itemName={dummyData[0].itemName}
          itemPrice={dummyData[0].itemPrice}
          itemImage={dummyData[0].itemImage}
          itemId={dummyData[0].itemId}
          itemQty={dummyData[0].itemQty}
        />
      </FakeOutletContext>
    );

    const button = screen.getByText("Add to cart");
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
