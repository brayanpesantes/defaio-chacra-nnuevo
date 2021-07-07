import React, { FC } from "react";
import { NavItem as Item } from "types/Nav-Item";
import NextLink from 'next/link'
import {Link,HStack, Icon, Text, Box, Heading} from '@chakra-ui/react'

type Props = {
  item: Item;
  isActive: boolean;
};

export const NavItem: FC<Props> = ({ item, isActive }) => {
  const { label } = item;

  if (item.type === "link") {
    const { icon } = item;
    return (
      <NextLink href="#" passHref>
        <Link variant="unstayled" _hover={{ textDecoration: "none" }}>
          <HStack align="center" justify="flex-start" height={{ base: 10, '2xl': 14 }} transition="ease-out" transitionProperty="background" transitionDuration="normal" _hover={{ background: "gray.dark" }}>
            <Icon width={5} height={5} mr={4} ml={8} color={isActive?"brand.red":"gray.light"} as={icon}/>
            <Text fontSize="md" fontWeight="medium" flex={1} letterSpacing="wider" color={isActive ? "brand.red" : "whiteAlpha.900"}>{label}</Text>
            {
              isActive && (
                <Box width={1} height={6} bg="brand.red"/>
              )
            }
          </HStack>
        </Link>
</NextLink>
    )
  }

  return (
    <Heading color="gray.light" fontWeight="normal" textTransform="uppercase" letterSpacing={6} fontSize="sm" ml={9} mt={{ base: 6, "2xl": 8 }} mb={2}>
{label}
    </Heading>
  )
};

