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

const newExerciseObj = (index) => {
  return {
    [`name-${index}`]: "",
    [`desc-${index}`]: "",
  };
};

export default function ExerciseList({ id }) {
  const { mutate } = useSWRConfig();
  const [flag, setFlag] = useState(false);
  const [exercise, setExercise] = useState([]);
  const [updateExercise, setUpdateExercise] = useState({
    flag: false,
    id: 0,
    name: "",
    desc: "",
  });

  const { data, isLoading, error } = useCategoryItem(id);
  const addExercise = () => {
    const newExerciseList = [...exercise];
    newExerciseList.push({ ...newExerciseObj(exercise.length) });
    setExercise([...newExerciseList]);
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

  const handleAddExercise = (e, index) => {
    const { name, value } = e.target;
    const copyExercise = [...exercise];
    copyExercise[index][name] = value;
    setExercise([...copyExercise]);
  };

  const handleAddSubmit = async (e, index) => {
    const convertParams = {
      id,
      name: exercise[index][`name-${index}`],
      desc: exercise[index][`desc-${index}`],
    };
    await axios.post("/exercise", { ...convertParams });

    mutate("/get/category");
    mutate(["/get/category/list", id]);
    handleAddCancel(e, index);
  };

  const handleAddCancel = (e, index) => {
    const copyExercise = [...exercise];
    copyExercise.splice(index, 1);
    setExercise([...copyExercise]);
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
            {/* {isLoading && (
              <Tr>
                <Td colSpan={3}>Loading...</Td>
              </Tr>
            )} */}
            {exercise.length > 0 &&
              exercise.map((ex, i) => (
                <Tr key={i} p={10}>
                  <Td colSpan={3}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Input
                        placeholder="이름 입력"
                        name={`name-${i}`}
                        value={ex[`name-${i}`]}
                        onChange={(e) => handleAddExercise(e, i)}
                      />
                      <Button
                        size="xs"
                        mr={2}
                        ml={2}
                        onClick={(e) => handleAddSubmit(e, i)}
                      >
                        o
                      </Button>
                      <Button
                        colorScheme="red"
                        size="xs"
                        onClick={(e) => handleAddCancel(i)}
                      >
                        x
                      </Button>
                    </Box>
                    <Box>
                      <Input
                        placeholder="설명 입력"
                        name={`desc-${i}`}
                        value={ex[`desc-${i}`]}
                        onChange={(e) => handleAddExercise(e, i)}
                      />
                    </Box>
                  </Td>
                </Tr>
              ))}
            {data?.length > 0
              ? data?.map((d) => (
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
