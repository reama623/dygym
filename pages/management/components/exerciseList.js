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
  const [updateExercise, setUpdateExercise] = useState({
    flag: false,
    id: 0,
    name: "",
    desc: "",
  });

  const { data, isLoading, error } = useCategoryItem(id);
  const addExercise = () => {
    setFlag(true);
  };
  const deleteExercise = async (e, item) => {
    await axios.delete(`/exercise?id=${item.id}`);
    mutate("/get/category");
    mutate(["/get/category/list", id]);
  };

  const handleUpdateExercise = (e, item) => {
    const { id, name, desc } = item;
    setUpdateExercise({
      flag: true,
      id: id,
      name,
      desc,
    });
  };
  const handleUpdateCancel = (e) => {
    setUpdateExercise({
      flag: false,
      id: 0,
      name: "",
      desc: "",
    });
  };

  const handleUpdateSubmit = async () => {
    const { id: exId, name, desc } = updateExercise;
    await axios.patch(`/exercise/${exId}`, { name, desc });
    mutate(["/get/category/list", id]);
    setUpdateExercise({
      flag: false,
      id: 0,
      name: "",
      desc: "",
    });
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
      <Box w="full" h="xl" overflowY="scroll">
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
                  <Tr key={d.id}>
                    {updateExercise.flag && updateExercise.id === d.id ? (
                      <Td>
                        <Input
                          name="name"
                          value={updateExercise.name}
                          onChange={(e) =>
                            setUpdateExercise({
                              ...updateExercise,
                              name: e.target.value,
                            })
                          }
                        />
                      </Td>
                    ) : (
                      <Td>{d.name}</Td>
                    )}
                    {updateExercise.flag && updateExercise.id === d.id ? (
                      <Td>
                        <Input
                          size="sm"
                          name="name"
                          value={updateExercise.desc}
                          onChange={(e) =>
                            setUpdateExercise({
                              ...updateExercise,
                              desc: e.target.value,
                            })
                          }
                        />
                      </Td>
                    ) : (
                      <Td>{d.desc}</Td>
                    )}

                    <Td align="right" display="flex">
                      {updateExercise.flag && updateExercise.id === d.id ? (
                        <Button
                          colorScheme="red"
                          size="xs"
                          onClick={(e) => handleUpdateSubmit(e, d)}
                        >
                          u
                        </Button>
                      ) : (
                        <Button
                          colorScheme="red"
                          size="xs"
                          onClick={(e) => handleUpdateExercise(e, d)}
                        >
                          a
                        </Button>
                      )}
                      {updateExercise.flag && updateExercise.id === d.id ? (
                        <Button
                          colorScheme="red"
                          size="xs"
                          onClick={(e) => handleUpdateCancel(e, d)}
                          ml="2"
                        >
                          c
                        </Button>
                      ) : (
                        <Button
                          colorScheme="red"
                          size="xs"
                          onClick={(e) => deleteExercise(e, d)}
                          ml="2"
                        >
                          x
                        </Button>
                      )}
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
      </Box>
    </VStack>
  );
}
