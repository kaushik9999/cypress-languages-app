import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import * as Chakra from "@chakra-ui/react";
import { usePageApp } from "./hooks";
import { Input } from "@/components/Input";

export const PageApp = () => {
  const { state, methods } = usePageApp();

  return (
    <Chakra.VStack w="full" minH="100vh" as="main" px="8">
      <Header />

      {state.isLoading && (
        <Chakra.HStack w="full" color="purple.500" justify="center" py="16">
          <Chakra.Spinner />
        </Chakra.HStack>
      )}

      {!state.isLoading && (
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
            <Input
              label="Search By Country"
              value={state.search}
              data-cy="search"
              onChange={(e) =>
                methods.handleChangeState("search", e.target.value)
              }
            />
            <Chakra.Button
              colorScheme="purple"
              variant="outline"
              onClick={methods.handleResetSearch}
              isDisabled={!state.isResetSearchEnabled}
            >
              Reset Search
            </Chakra.Button>
          </Chakra.HStack>

          <Chakra.Text
            as="h2"
            fontSize="sm"
            fontWeight="bold"
            color="purple.500"
          >
            Languages ({state.languages.length})
          </Chakra.Text>

          {state.filteredLanguages?.map((language) => (
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
    </Chakra.VStack>
  );
};
