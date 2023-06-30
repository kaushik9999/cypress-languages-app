import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Modal } from "@/components/Modal";
import { usePagePublic } from "./hooks";
import { Input } from "@/components/Input";

export const PagePublic = () => {
  const { state, methods } = usePagePublic();

  return (
    <Chakra.VStack w="full" h="100vh" justify="center" as="main" spacing="8">
      <Modal onClose={methods.onClose} isOpen={state.isOpen}>
        <Chakra.VStack
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            methods.handleLogIn();
          }}
          align="center"
          spacing="8"
        >
          <Chakra.Image
            src="/language-list-logo.svg"
            alt="Language List Icon"
          />
          <Input
            label="Email"
            type="email"
            data-cy="email"
            value={state.email}
            onChange={(e) => methods.handleChangeState("email", e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            data-cy="password"
            value={state.password}
            onChange={(e) =>
              methods.handleChangeState("password", e.target.value)
            }
          />
          <Chakra.Button
            onClick={methods.onOpen}
            colorScheme="purple"
            type="submit"
            data-cy="submit"
            isDisabled={!state.isCredentialsValid}
            isLoading={state.isLoading}
          >
            Log In
          </Chakra.Button>
        </Chakra.VStack>
      </Modal>
      <Chakra.Image src="/language-list-logo.svg" alt="Language List Icon" />
      <Chakra.Heading as="h1">Language List App</Chakra.Heading>
      <Chakra.Heading
        textAlign="center"
        fontWeight="normal"
        as="h2"
        fontSize="md"
        maxW="400px"
      >
        Introducing Language List app, your ultimate resource to explore the
        world&apos;s main languages and discover their presence in specific
        countries. With our app, you can easily access a comprehensive list of
        languages spoken worldwide and identify which ones are prevalent in
        particular countries.
      </Chakra.Heading>
      <Chakra.Button onClick={methods.onOpen} colorScheme="purple" data-cy="landingLogin">
        Log In
      </Chakra.Button>
    </Chakra.VStack>
  );
};
