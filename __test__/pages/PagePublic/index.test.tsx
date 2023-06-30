import * as Chakra from "@chakra-ui/react";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { PagePublic } from "@/pages/PagePublic";
import { expect } from "@jest/globals";

describe('PagePublic', () => {
    
    it('test login button', () => {
        render(<PagePublic />);
        const header = screen.getByRole('button');
        expect(header.textContent).toBe('Log In');
    })
    it('test Header render Log In button', () => {
        const onClick = jest.fn();
        render(<Chakra.Button onClick={onClick} colorScheme="purple" data-cy="landingLogin">
        Log In
      </Chakra.Button>);
        fireEvent.click(screen.getByText("Log In"));
        expect(onClick).toHaveBeenCalled();
    })
    it('test Header render H1', () => {
        const { container } = render(<PagePublic />);
        expect(container.querySelector('h1')?.textContent).toBe('Language List App');
    })
    it('test Header render H2', () => {
        const { container } = render(<PagePublic />);
        expect(container.querySelector('h2')?.textContent).toContain("Introducing Language List app,");
    })
    it('test logo render', () => {
        render(<PagePublic />);
        const logo = screen.getByAltText("Language List Icon");
        expect(logo).toBeDefined();
    })
    it('test input email ', () => {
        render(<PagePublic />);
        fireEvent.click(screen.getByText('Log In'))
        const label = screen.getByLabelText('Email');
        expect(label.getAttribute('type')).toBe("email");
    })
    it('test input password', () => {
        render(<PagePublic />);
        fireEvent.click(screen.getByText('Log In'));
        const label = screen.getByLabelText('Password');
        expect(label.getAttribute('type')).toBe("password");
        
    })
    it('test input email textbox', () => {
        render(<PagePublic />);
        fireEvent.click(screen.getByText('Log In'));
        const input = screen.getByLabelText("Email");
        fireEvent.change(input, { target: { value: 'test@test.com' } });
        expect(input.getAttribute('value')).toBe('test@test.com');
        
    })
    it('test input password textbox', () => {
        render(<PagePublic />);
        fireEvent.click(screen.getByText('Log In'));
        const input = screen.getByLabelText("Password");
        fireEvent.change(input, { target: { value: 'password' } });
        expect(input.getAttribute('value')).toBe('password');
        
    })
    it('test input login button enabled ', () => {
        render(<PagePublic />);
        fireEvent.click(screen.getByText('Log In'));
        const usr = screen.getByLabelText("Email");
        fireEvent.change(usr, { target: { value: 'test@test.com' } });
        const pss = screen.getByLabelText("Password");
        fireEvent.change(pss, { target: { value: 'password' } });
        const signIn = screen.getAllByText('Log In')[1] as HTMLButtonElement;
        expect(signIn.disabled).toBeFalsy();
    })
    it('test input login button enabled ', () => {
        render(<PagePublic />);
        fireEvent.click(screen.getByText('Log In'));
        const usr = screen.getByLabelText("Email");
        fireEvent.change(usr, { target: { value: 'test@test.com' } });
        const pss = screen.getByLabelText("Password");
        fireEvent.change(pss, { target: { value: 'pass' } });
        const signIn = screen.getAllByText('Log In')[1] as HTMLButtonElement;
        expect(signIn.disabled).toBeTruthy();
    })
    it('test submit button click ', () => {
        render(<PagePublic />);
        fireEvent.click(screen.getByText('Log In'));
        const usr = screen.getByLabelText("Email");
        fireEvent.change(usr, { target: { value: 'test@test.com' } });
        const pss = screen.getByLabelText("Password");
        fireEvent.change(pss, { target: { value: 'password' } });
        const signIn = screen.getAllByText('Log In')[1] as HTMLButtonElement;
        const handleLogIn = jest.fn(()=>{});
        render(<Chakra.Button
            onClick={handleLogIn}
            colorScheme="purple"
            type="submit"
            data-cy="submit"
            isDisabled={false}
            isLoading={false}
          >
            Log In
          </Chakra.Button>);
    })
})