import {
  Box,
  VStack,
  Heading,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { CategoryCard } from "../../components/card";
import useCategory from "../../effects/useCategory";

import Modal from "../../components/modal";
import { useState } from "react";

export default function Management() {
  const { data, isLoading, error } = useCategory();

  const [modal, setModal] = useState({
    isOpen: false,
  });

  const handleModalClose = (e) => setModal({ ...modal, isOpen: false });

  const handleCategoryClick = (e, category) => {
    setModal({
      ...modal,
      isOpen: true,
      ...category,
    });
  };
  return (
    <>
      <VStack spacing={3} alignItems="flex-start">
        <Box ml={2}>
          <Heading as="h2" alignItems="left">
            {`운동 관리 > 분류`}
          </Heading>
        </Box>
        <Box display="flex" flexWrap="wrap">
          {isLoading && "Loading..."}
          {!isLoading &&
            data.map((d) => (
              <CategoryCard
                key={d.num}
                item={d}
                handleClick={handleCategoryClick}
              />
            ))}
        </Box>
      </VStack>
      <Modal {...modal} onClose={handleModalClose}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>번호</Th>
              <Th>이름</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>렛풀 다운</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>사이드 레터럴 레이즈</Td>
            </Tr>
          </Tbody>
        </Table>
      </Modal>
    </>
  );
}
