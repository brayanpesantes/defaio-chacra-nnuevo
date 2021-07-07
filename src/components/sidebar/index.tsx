import React from "react";
import { List, VStack, ListItem } from "@chakra-ui/react";
import { navItem } from "./nav-data";
import {NavItem} from './nav-item'
import { Logo } from "components/logo";
export const Sidebar = () => {
  return (
    <VStack
      alignItems="flex-start"
      width="full"
      height="full"
      maxW={{ base: 56, "2xl": 72 }}
      borderRightColor="gray.dark"
      borderRightWidth={2}
      flexShrink={0}
    >
      <Logo/>
      <List width="full" overflowY="auto">
        {navItem.map((item, index) => (
          <ListItem key={item.label}>
            <NavItem item={item} isActive={index===0}/>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};


