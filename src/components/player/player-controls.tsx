import { HStack } from "@chakra-ui/react";
import { Control } from "types/control";

import { PlayerControl } from "./player-control";

type Props = {
  controls: Control[];
};

export const PlayerControls = ({ controls }: Props) => {
  return (
    <HStack spacing={4}>
      {controls.map(({ label, icon }) => (
        <PlayerControl label={label} icon={icon} key={label} />
      ))}
    </HStack>
  );
};
