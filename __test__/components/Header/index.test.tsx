import * as Chakra from "@chakra-ui/react";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Header } from "@/components/Header";
import { expect } from "@jest/globals";

describe('Header component', () => {
  it('header text', () => {
    render(<Header />);
    const header = screen.getByText('Languages');
    expect(header.textContent).toBe('LanguagesList');
  })
  it('logout button presence', () => {
    render(<Header />);
    const logoutBtn = screen.getByText('Log Out');
    expect(logoutBtn).toBeTruthy();
  })
  it('logo img presence', () => {
    render(<Header />);
    const logoImg = screen.getByAltText('Language List Icon');
    expect(logoImg).toBeTruthy();
  })
  it('logout fire event - state isLoading false', () => {
    const handleLogOut = jest.fn();
    render(<Chakra.Button
      colorScheme="purple"
      onClick={handleLogOut}
      isLoading={false}
      data-cy='logout'
    >
      Log Out
    </Chakra.Button>);
    fireEvent.click(screen.getByText("Log Out"));
    expect(handleLogOut).toHaveBeenCalled();
  })
  it('logout fire event - state isLoading true', () => {
    const handleLogOut = jest.fn();
    render(<Chakra.Button
      colorScheme="purple"
      onClick={handleLogOut}
      isLoading={true}
      data-cy='logout'
    >
      Log Out
    </Chakra.Button>);
    fireEvent.click(screen.getByText("Log Out"));
    expect(handleLogOut).not.toHaveBeenCalled();
  })

})