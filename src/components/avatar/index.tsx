import React from "react";
import { HStack, Text, Avatar as ChakraAvatar } from "@chakra-ui/react";

export const Avatar = () => {
  return (
    <HStack flexShrink={0}>
      <Text mr={3}>Kunle Ajayi</Text>
      <ChakraAvatar
        name="Kunle Ajayi"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      />
    </HStack>
  );
};
