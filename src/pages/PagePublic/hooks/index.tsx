import { useAuth } from "@/contexts/useAuth";
import { utils } from "@/utils";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export const usePagePublic = () => {
  const modal = useDisclosure();
  const { login, isLoading } = useAuth();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChangeState = (key: "email" | "password", value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogIn = async () => {
    await login(state.email, state.password);
  };

  const isEmailValid = utils.validateEmail(state.email);
  const isPasswordValid = utils.validatePassword(state.password);
  const isCredentialsValid = isEmailValid && isPasswordValid;

  return {
    state: {
      isOpen: modal.isOpen,
      email: state.email,
      password: state.password,
      isEmailValid: isEmailValid,
      isPasswordValid: isPasswordValid,
      isCredentialsValid: isCredentialsValid,
      isLoading: isLoading,
    },
    methods: {
      onClose: modal.onClose,
      onOpen: modal.onOpen,
      handleChangeState: handleChangeState,
      handleLogIn: handleLogIn,
    },
  };
};
