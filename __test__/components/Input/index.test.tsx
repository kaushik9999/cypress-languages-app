import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Input } from "@/components/Input";
import { expect } from "@jest/globals";

describe('Input component', () => {
    it('test input label and helper text', () => {
        const { container } = render(<Input label={"TestLabel"} helperText={"testHelperText"} />);
        const labelText = container.querySelector('label')?.textContent;
        const ele = screen.getByText("testHelperText");
        expect(ele).toBeTruthy();
        expect(labelText).toBe('TestLabel');
    })
    it('test input textbox', () => {
        const { container } = render(<Input label={"TestLabel"} />);
        const ele = container.querySelector('input') as HTMLInputElement;
        expect(ele).toBeTruthy();
    })

})