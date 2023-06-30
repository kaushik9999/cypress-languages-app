import * as Chakra from "@chakra-ui/react";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { PageApp } from "@/pages/PageApp";
import { expect } from "@jest/globals";
import { Card } from "@/components/Card";
import { languages } from "@/data/languages";

describe('PageApp', () => {

    it('test reset button - disabled', () => {
        render(<PageApp />);
        const reset = screen.getByText('Reset Search') as HTMLButtonElement;
        expect(reset.disabled).toBeTruthy();
    })

    it('test search inputbox and reset button enabled', () => {
        render(<PageApp />);
        const searchInput = screen.getByLabelText('Search By Country');
        fireEvent.change(searchInput, { target: { value: 'canada' } });
        expect(searchInput.getAttribute('value')).toBe('canada');
        const reset = screen.getByText('Reset Search') as HTMLButtonElement;
        expect(reset.disabled).toBeFalsy();
    })
    it('test render number of languages', () => {
        const { container } = render(<Chakra.Text
            as="h2"
            fontSize="sm"
            fontWeight="bold"
            color="purple.500"
        >
            Languages ({21})
        </Chakra.Text>);
        expect(container.querySelector('h2')?.textContent).toContain("Languages (21)");
    })
    it('test isLoading spinner', () => {
        render(<Chakra.VStack w="full" minH="100vh" as="main" px="8">
            {true && (
                <Chakra.HStack w="full" color="purple.500" justify="center" py="16">
                    <Chakra.Spinner />
                </Chakra.HStack>
            )}
        </Chakra.VStack>);
        const spinner = screen.getByText('Loading...');
        expect(spinner).toBeTruthy();
    })
    it('test search filter by country - input canada', () => {
        let state = true;
        const filteredLanguages = languages.filter((lang) => lang.countries.join("").toLowerCase().includes('canada'));
        render(<Chakra.VStack w="full" minH="100vh" as="main" px="8">
            {state && (
                <Chakra.VStack
                    w="full"
                    align="flex-start"
                    spacing="4"
                    py="8"
                    as="section"
                >
                    <Chakra.HStack
                        w="full"
                        justify="space-between"
                        align="flex-end"
                        spacing="8"
                        py="8"
                    >
                    </Chakra.HStack>
                    {filteredLanguages?.map((language) => (
                        <Card
                            key={language.id}
                            code={language.code}
                            countries={language.countries}
                            name={language.name}
                            id={language.id}
                        />
                    ))}
                </Chakra.VStack>
            )}
        </Chakra.VStack>);
        const lang1 = screen.getByText('English');
        expect(lang1).toBeTruthy();
        const lang2 = screen.getByText('French');
        expect(lang2).toBeTruthy();
        expect(screen.getByText('United States')).toBeTruthy();
        expect(screen.getByText('Australia')).toBeTruthy();
    })
    it('test search filter by country - input spain', () => {
        let state = true;
        const filteredLanguages = languages.filter((lang) => lang.countries.join("").toLowerCase().includes('spain'));
        render(<Chakra.VStack w="full" minH="100vh" as="main" px="8">
            {state && (
                <Chakra.VStack
                    w="full"
                    align="flex-start"
                    spacing="4"
                    py="8"
                    as="section"
                >
                    <Chakra.HStack
                        w="full"
                        justify="space-between"
                        align="flex-end"
                        spacing="8"
                        py="8"
                    >
                    </Chakra.HStack>
                    {filteredLanguages?.map((language) => (
                        <Card
                            key={language.id}
                            code={language.code}
                            countries={language.countries}
                            name={language.name}
                            id={language.id}
                        />
                    ))}
                </Chakra.VStack>
            )}
        </Chakra.VStack>);
        const lang1 = screen.getByText('Spanish');
        expect(lang1).toBeTruthy();
        expect(screen.getByText('Peru')).toBeTruthy();
        expect(screen.getByText('Chile')).toBeTruthy();
    })
})