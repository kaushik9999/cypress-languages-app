import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Card } from "@/components/Card";
import { expect } from "@jest/globals";

describe('Card component', () => {
    it('test card label', () => {
        const { container } = render(<Card id={1} name={"United Kingdom"} code={"1"} countries={["doo", "dooo", "dododododo"]} />);
        const name = screen.getByText("United Kingdom");
        const code = screen.getByText("1");
        const countries = container.querySelectorAll('span');
        expect(name.textContent).toBe("United Kingdom");
        expect(code).toBeTruthy();
        expect(countries.length).toBe(3);
    })
})