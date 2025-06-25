//  external dependencies
import { vi, describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//  relative dependencies
import Card from "../components/Card.jsx";

//  setup props
const itemName = 'apples';
const itemPrice = 1.40;
const itemImage = 'abc';
const inCart = false;
const itemId = 1;
const onClick = vi.fn();


describe.skip('Card element displays and behaves correctly', () => {

  it('displays the right title on the Card', () => {
    render(
      <Card 
        itemPrice={itemPrice}
        itemName={itemName}
        itemImage={itemImage}
        inCart={inCart}
        itemId={itemId}
        onClick={onClick}
      />
    )
    expect(screen.getByText('apples'));
  })

  it('performs onClick function when "add to cart" is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Card
        itemName={itemName}
        itemPrice={itemPrice}
        itemImage={itemImage}
        inCart={inCart}
        itemId={itemId}
        onClick={onClick}
      />
    )
  
    const button = screen.getByText("Add to cart");
    await user.click(button);
  
    expect(onClick).toHaveBeenCalled();
  })

})