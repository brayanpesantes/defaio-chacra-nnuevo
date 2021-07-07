import { VStack, Text, Box, useBreakpointValue } from "@chakra-ui/react";

import { Image } from "components/image";
import { Producer as ProducerType } from "types/producers";

type Props = ProducerType & {
  badge?: boolean;
};

export const Producer = ({ name, image, badge }: Props) => {
  const size = useBreakpointValue({ base: "48px", "2xl": "80px" }, "2xl");
  return (
    <VStack>
      <Box position="relative">
        <Image
          src={image}
          width={size}
          height={size}
          rounded="lg"
          objectFit="cover"
          alt="sa"
        />
        {badge && (
          <Box
            bg="brand.red"
            position="absolute"
            top={-3}
            ring={-3}
            rounded="full"
            width={6}
            height={6}
            borderWidth={4}
            borderColor="black"
          ></Box>
        )}
      </Box>
    </VStack>
  );
};
