import React from "react";
import * as Chakra from "@chakra-ui/react";

interface InputProps extends Chakra.InputProps {
  label: string;
  helperText?: string;
}

export const Input = ({ label, helperText, ...props }: InputProps) => {
  return (
    <Chakra.FormControl w="full">
      <Chakra.FormLabel fontSize="xs" color="purple.500">
        {label}
      </Chakra.FormLabel>
      <Chakra.Input {...props} />
      {helperText && (
        <Chakra.FormHelperText>{helperText}</Chakra.FormHelperText>
      )}
    </Chakra.FormControl>
  );
};
