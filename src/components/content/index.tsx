import React from "react";
import { HStack, VStack } from "@chakra-ui/react";
import { Sidebar } from "components/sidebar";
import { SearchBar } from "components/search-bar";
import { GenresCouersel } from "components/genre-coursel";
import { TopPicks } from "components/top-picks";
import { TopProducers } from "components/top-producers";

export const Content = () => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      <Sidebar />
      <VStack
        px={12}
        pt={12}
        width="full"
        height="full"
        spacing={6}
        overflow="hidden"
      >
        <SearchBar />
        <GenresCouersel />
        <HStack width="full" alignItems="flex-start" overflow="hidden" flex={1}>
          <TopPicks />
          <TopProducers flexShrink={0} />
        </HStack>
      </VStack>
    </HStack>
  );
};
