import React from "react";
import * as Chakra from "@chakra-ui/react";
import { useAuth } from "@/contexts/useAuth";

export const Header = () => {
  const { logOut, isLoading } = useAuth();

  const handleLogOut = () => logOut();

  return (
    <Chakra.HStack as="header" w="full" h="10vh" justify="space-between">
      <Chakra.HStack>
        <Chakra.Image
          w="20px"
          src="/language-list-logo.svg"
          alt="Language List Icon"
        />
        <Chakra.Text color="purple.500" fontWeight="bold">
          Languages
          <Chakra.Text as="span" color="gray.900">
            List
          </Chakra.Text>
        </Chakra.Text>
      </Chakra.HStack>

      <Chakra.Button
        colorScheme="purple"
        onClick={handleLogOut}
        isLoading={isLoading}
        data-cy='logout'
      >
        Log Out
      </Chakra.Button>
    </Chakra.HStack>
  );
};
