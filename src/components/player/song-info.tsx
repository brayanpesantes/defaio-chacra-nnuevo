import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { PlayerControl } from "./player-control";
import { FaHeart } from "react-icons/fa";
export const SongInfo = () => {
  return (
    <HStack spacing={8}>
      <VStack spacing={2} alignItems="flex-start">
        <Heading size="sm" color="white">
          As Broand as dayight
        </Heading>
        <Text fontSize={14} color="gray.light">
          Moonlight Walker
        </Text>
      </VStack>
      <PlayerControl
        label="Add to Favorite"
        icon={<FaHeart />}
        color="brand.red"
      />
    </HStack>
  );
};
