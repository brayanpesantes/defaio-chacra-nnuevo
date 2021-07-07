/* eslint-disable react/display-name */
import { ComponentProps, useMemo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

import { useTable, Column } from "react-table";
import { topPicks } from "./picks-data";
import { Pick } from "types/picks";
import { Image } from "components/image";
import { brandRing } from "src/utils/brandRing";

const HeaderCell = ({ value }: { value: string }) => (
  <Heading size="xs" textTransform="none" color="gray.light">
    {value}
  </Heading>
);

export const TopPicks = (props: ComponentProps<typeof VStack>) => {
  const data = useMemo(() => topPicks, []);
  const columns = useMemo<Column<Pick>[]>(
    () => [
      {
        accessor: "image",
        width: "100px",
        Cell: ({ value }) => (
          <VStack alignItems="flex-start" justifyContent="center">
            <Image
              src={value}
              width="56px"
              height="56px"
              minWidth="56px"
              minHeight="56px"
              rounded="xl"
              objectFit="cover"
              quality="75"
              alt=""
            />
          </VStack>
        ),
      },
      {
        Header: () => <HeaderCell value="Name" />,
        accessor: "name",
      },
      {
        Header: () => <HeaderCell value="Producer" />,
        accessor: "producer",
      },
      {
        Header: () => <HeaderCell value="Category" />,
        accessor: "category",
      },
      {
        Header: () => <HeaderCell value="Time" />,
        accessor: "time",
      },
      {
        Header: () => <HeaderCell value="Buy" />,
        id: "buy",
        width: "40px",
        Cell: () => (
          <IconButton
            icon={<FaShoppingCart />}
            aria-label="Buy Song"
            rounded="full"
            {...brandRing}
          />
        ),
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <VStack align="flex-start" height="full" {...props}>
      <Heading>Top Picks</Heading>
      <Flex overflowY="auto" width="full">
        <Table {...getTableProps()} position="relative">
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    width={column.width}
                    {...column.getHeaderProps()}
                    borderBottom={0}
                    position="sticky"
                    zIndex="banner"
                    top={0}
                    bg="black"
                    key={index}
                  >
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <Tr
                  {...row.getRowProps()}
                  transition="ease-out"
                  transitionProperty="background"
                  transitionDuration="normal"
                  _hover={{
                    background: "gray.dark",
                    cursor: "pointer",
                  }}
                  key={index}
                >
                  {row.cells.map((cell, index) => (
                    <Td
                      {...cell.getCellProps()}
                      py={2}
                      borderBottom={0}
                      paddingInlineEnd={0}
                      minWidth={cell.column.width}
                      key={index}
                    >
                      {cell.render("Cell")}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </VStack>
  );
};
