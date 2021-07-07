import { Box, Container, HStack } from "@chakra-ui/react";
import { Disc } from "./disc";
import { PlayerControls } from "./player-controls";
import { SongInfo } from "./song-info";
import { PayProgress } from "./pay-progress";

import {
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { RiPlayListFill } from "react-icons/ri";
export const Player = () => {
  return (
    <Box
      width="full"
      bg="gray.dark"
      height={{ base: 24, "2xl": 32 }}
      flexShrink={0}
    >
      <Container centerContent height="full" maxW="7xl">
        <HStack
          width="full"
          height="full"
          justifyContent="flex-start"
          spacing={12}
        >
          <Disc />
          <SongInfo />
          <PlayerControls
            controls={[
              { label: "Previous Song", icon: <FaStepBackward /> },
              { label: "Play Song", icon: <FaPlay /> },
              { label: "Next Song", icon: <FaStepForward /> },
            ]}
          />
          <PayProgress />
          <PlayerControls
            controls={[
              { label: "Control volumen", icon: <FaVolumeUp /> },
              { label: "Enable repeat", icon: <FiRepeat /> },
              { label: "Playlist", icon: <RiPlayListFill /> },
            ]}
          />
        </HStack>
      </Container>
    </Box>
  );
};
