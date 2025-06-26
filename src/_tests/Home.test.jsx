//  external dependencies
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

//  relative dependencies
import Home from "../components/Home.jsx";
import { FakeOutletContext } from "./_mocks/FakeOutletContext.jsx";

describe("home page loads", () => {
  it("loads with the correct header", () => {
    render(
      <FakeOutletContext>
        <Home />
      </FakeOutletContext>,
    );
    expect(screen.getByText("Fresh. Natural. Local."));
  });

  it("displays the github button", () => {
    render(
      <FakeOutletContext>
        <Home />
      </FakeOutletContext>,
    );
    expect(screen.getByText("See the code on GitHub"));
  });
});
