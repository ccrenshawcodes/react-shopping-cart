//  external dependencies
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

//  relative dependencies
import Home from "../components/Home.jsx";

describe('home page loads', () => {

  it('loads with the correct header', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText('Fresh. Natural. Local.'));
  })

  it('displays the github button', () => {
    render(
      <MemoryRouter>
        <Home />
    </MemoryRouter>
    );
    expect(screen.getByText('See the code on GitHub'));
  })
})
