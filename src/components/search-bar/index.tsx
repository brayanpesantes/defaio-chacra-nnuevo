import {
  HStack,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Avatar } from "components/avatar";
import { RiSearchLine } from "react-icons/ri";
import { brandRing } from "src/utils/brandRing";

export const SearchBar = () => {
  return (
    <HStack width="full">
      <InputGroup maxw="7xl">
        <InputLeftElement pointerEvents="none" children={<RiSearchLine />} />
        <Input
          variant="outline"
          rounded="lg"
          placeholder="Search for Sounds,Tracks"
          {...brandRing}
        />
      </InputGroup>
      <Spacer />
      <Avatar />
    </HStack>
  );
};
