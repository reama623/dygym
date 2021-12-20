import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import useCategoryItem from "../../../effects/useCategoryItem";
import axios from "axios";
import { useSWRConfig } from "swr";

export default function ExerciseList({ id }) {
  const { mutate } = useSWRConfig();
  const [flag, setFlag] = useState(false);
  const [exercise, setExercise] = useState({
    id,
    name: "",
    desc: "",
  });
  const { data, isLoading, error } = useCategoryItem(id);
  const addExercise = () => {
    setFlag(true);
  };
  const deleteExercise = async (e, item) => {
    await axios.delete(`/exercise?num=${item.num}`);
    mutate("/get/category");
    mutate(["/get/category/list", id]);
  };

  const handleAddExercise = (e) => {
    const { name, value } = e.target;
    setExercise({
      ...exercise,
      [name]: value,
    });
  };

  const handleAddSubmit = async () => {
    await axios.post("/exercise", { ...exercise });

    mutate("/get/category");
    mutate(["/get/category/list", id]);
    handleAddCancel();
  };

  const handleAddCancel = () => {
    setFlag(false);
    setExercise({
      ...exercise,
      name: "",
      desc: "",
    });
  };
  return (
    <VStack>
      <Button w="full" onClick={addExercise}>
        추가
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>설명</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading && (
            <Tr>
              <Td colSpan={3}>Loading...</Td>
            </Tr>
          )}
          {flag && (
            <>
              <Tr p={10}>
                <Td colSpan={3}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Input
                      placeholder="이름 입력"
                      name="name"
                      value={exercise.name}
                      onChange={handleAddExercise}
                    />
                    <Button size="xs" mr={2} ml={2} onClick={handleAddSubmit}>
                      o
                    </Button>
                    <Button
                      colorScheme="red"
                      size="xs"
                      onClick={handleAddCancel}
                    >
                      x
                    </Button>
                  </Box>
                  <Box>
                    <Input
                      placeholder="설명 입력"
                      name="desc"
                      value={exercise.desc}
                      onChange={handleAddExercise}
                    />
                  </Box>
                </Td>
              </Tr>
            </>
          )}
          {!isLoading && data.length > 0
            ? data.map((d) => (
                <Tr key={d.num}>
                  <Td>{d.name}</Td>
                  <Td>{d.description}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="xs"
                      onClick={(e) => deleteExercise(e, d)}
                    >
                      x
                    </Button>
                  </Td>
                </Tr>
              ))
            : !flag && (
                <Tr>
                  <Td colSpan={3}>운동이 없습니다.</Td>
                </Tr>
              )}
        </Tbody>
      </Table>
    </VStack>
  );
}
