import { Fragment, useState } from "react";
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
import { randomID } from "../../../core/utils/dic";

const newExerciseObj = (eid) => {
  return {
    id: eid,
    [`title-${eid}`]: "",
    [`desc-${eid}`]: "",
  };
};

export default function ExerciseList({ id }) {
  const { mutate } = useSWRConfig();
  const [flag, setFlag] = useState(false);
  const [exercise, setExercise] = useState([]);
  const [updateExercise, setUpdateExercise] = useState({
    flag: false,
    id: 0,
    title: "",
    desc: "",
  });

  const { data, isLoading, error } = useCategoryItem(id);
  const addExerciseCase = () => {
    const newExerciseList = [...exercise];
    newExerciseList.push({ ...newExerciseObj(randomID()) });
    setExercise([...newExerciseList]);
  };

  const deleteExerciseCase = (e, id) => {
    const copyExercise = [...exercise];
    const findExerciseIndex = exercise.findIndex((ex) => ex.id === id);
    copyExercise.splice(findExerciseIndex, 1);
    setExercise([...copyExercise]);
  };

  const deleteExercise = async (e, item) => {
    await axios.delete(`/exercise?id=${item.id}`);
    mutate("/get/category").then((o) => {
      mutate(["/get/category/list", id]);
    });
  };

  const handleUpdateExercise = (e, item) => {
    const { id, title, desc } = item;
    setUpdateExercise({
      flag: true,
      id: id,
      title,
      desc,
    });
  };
  const handleUpdateCancel = (e) => {
    setUpdateExercise({
      flag: false,
      id: 0,
      title: "",
      desc: "",
    });
  };

  const handleUpdateSubmit = async () => {
    const { id: exId, title, desc } = updateExercise;
    await axios.patch(`/exercise/${exId}`, { title, desc });
    mutate(["/get/category/list", id]);
    setUpdateExercise({
      flag: false,
      id: 0,
      title: "",
      desc: "",
    });
  };

  const handleAddExercise = (e, index) => {
    const { name, value } = e.target;
    const [key, id] = name.split("-");
    const copyExercise = [...exercise];
    const findExercise = copyExercise.find((ex) => ex.id === id);
    findExercise[name] = value;
    setExercise([...copyExercise]);
  };

  const handleAddSubmit = async (e, eid) => {
    // console
    const findExercise = exercise.find((ex) => ex.id === eid);
    const convertParams = {
      id,
      title: findExercise[`title-${eid}`],
      desc: findExercise[`desc-${eid}`],
    };
    await axios
      .post("/exercise", { ...convertParams })
      .then((o) => {
        mutate("/get/category");
        mutate(["/get/category/list", id]);
        deleteExerciseCase(e, id);
      })
      .catch((o) => {
        const { response } = o;
        if (response.status === 500) {
          alert("중복된 이름이 존재합니다.");
          return;
        }
        console.error("[ERROR]:[create]:[exercise]", o);
      });
  };

  return (
    <VStack>
      <Button w="full" onClick={addExerciseCase}>
        추가
      </Button>
      <Box w="full" overflowY="scroll">
        <Table>
          <Tbody>
            {exercise.length > 0 &&
              exercise.map((ex, i) => (
                <Tr key={i} p={10}>
                  <Td colSpan={3}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Input
                        placeholder="이름 입력"
                        name={`title-${ex.id}`}
                        value={ex[`title-${ex.id}`]}
                        onChange={(e) => handleAddExercise(e, ex.id)}
                      />
                      <Button
                        size="xs"
                        mr={2}
                        ml={2}
                        onClick={(e) => handleAddSubmit(e, ex.id)}
                      >
                        o
                      </Button>
                      <Button
                        colorScheme="red"
                        size="xs"
                        onClick={(e) => deleteExerciseCase(e, ex.id)}
                      >
                        x
                      </Button>
                    </Box>
                    <Box>
                      <Input
                        placeholder="설명 입력"
                        name={`desc-${ex.id}`}
                        value={ex[`desc-${ex.id}`]}
                        onChange={(e) => handleAddExercise(e, ex.id)}
                      />
                    </Box>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
      <Box w="full" h="xl" overflowY="scroll">
        <Table variant="simple">
          {/* <Thead>
            <Tr>
              <Th>이름</Th>
              <Th>설명</Th>
              <Th></Th>
            </Tr>
          </Thead> */}
          <Tbody>
            {/* {isLoading && (
              <Tr>
                <Td colSpan={3}>Loading...</Td>
              </Tr>
            )} */}
            {data?.map((d) => (
              <Fragment key={d.id}>
                <Tr>
                  <Td fontWeight={600}>운동 이름</Td>
                  <Td>
                    {updateExercise.flag && updateExercise.id === d.id ? (
                      <Input
                        name="title"
                        // w="28"
                        // size="sm"
                        value={updateExercise.title}
                        onChange={(e) =>
                          setUpdateExercise({
                            ...updateExercise,
                            title: e.target.value,
                          })
                        }
                      />
                    ) : (
                      d.title
                    )}
                  </Td>
                  <Td>
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
                        u
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
                <Tr>
                  <Td fontWeight={600}>설명</Td>
                  <Td colSpan={2}>
                    {updateExercise.flag && updateExercise.id === d.id ? (
                      <Input
                        size="sm"
                        name="title"
                        value={updateExercise.desc}
                        onChange={(e) =>
                          setUpdateExercise({
                            ...updateExercise,
                            desc: e.target.value,
                          })
                        }
                      />
                    ) : (
                      d.desc
                    )}
                  </Td>
                </Tr>
              </Fragment>
            ))}
            {/* {data?.length > 0
              ? data?.map((d) => (
                  <Tr key={d.id}>
                    {updateExercise.flag && updateExercise.id === d.id ? (
                      <Td>
                        <Input
                          name="title"
                          size="sm"
                          value={updateExercise.title}
                          onChange={(e) =>
                            setUpdateExercise({
                              ...updateExercise,
                              title: e.target.value,
                            })
                          }
                        />
                      </Td>
                    ) : (
                      <Td>{d.title}</Td>
                    )}
                    {updateExercise.flag && updateExercise.id === d.id ? (
                      <Td>
                        <Input
                          size="sm"
                          name="title"
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
                )} */}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
}
