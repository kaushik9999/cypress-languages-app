import React from "react";
import * as Chakra from "@chakra-ui/react";
import { ILanguage } from "@/types/ILanguage";

interface CardProps extends ILanguage {}

export const Card = (props: CardProps) => {
  return (
    <Chakra.VStack
      w="full"
      align="flex-start"
      bg="gray.50"
      p="8"
      spacing="8"
      as="article"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="6"
    >
      <Chakra.HStack w="full">
        <Chakra.Text>{props.name}</Chakra.Text>
        <Chakra.Text
          color="purple.500"
          borderWidth="1px"
          px="2"
          borderColor="purple.500"
          borderRadius="6"
          bg="purple.50"
        >
          {props.code}
        </Chakra.Text>
      </Chakra.HStack>
      {props.countries.length !== 0 && (
        <Chakra.HStack w="full" wrap="wrap">
          {props?.countries?.map((country) => (
            <Chakra.Tag bg="purple.500" color="gray.50" key={country}>
              {country}
            </Chakra.Tag>
          ))}
        </Chakra.HStack>
      )}
    </Chakra.VStack>
  );
};
