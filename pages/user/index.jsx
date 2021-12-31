import {
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

export default function User() {
  return (
    <VStack>
      <HStack w="full">
        <Text fontWeight={600}>회원 리스트</Text>
        <Text>총 3 명</Text>
      </HStack>
      <Box w="full">
        <Table variant="simple" colorScheme="blackAlpha">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th textAlign="center">회원 이름</Th>
              <Th textAlign="center">회원 id</Th>
              <Th textAlign="center">등록일</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td textAlign="center">김지영</Td>
              <Td textAlign="center">jykim</Td>
              <Td textAlign="center">2021-12-30</Td>
            </Tr>
            <Tr>
              <Td textAlign="center">박성일</Td>
              <Td textAlign="center">sipark</Td>
              <Td textAlign="center">2021-12-29</Td>
            </Tr>
            <Tr>
              <Td textAlign="center">아무개</Td>
              <Td textAlign="center">admin</Td>
              <Td textAlign="center">2021-11-30</Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th colSpan={3} textAlign="center">
                총 3명
              </Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </Box>
    </VStack>
  );
}
