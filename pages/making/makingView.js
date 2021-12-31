import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Code,
  HStack,
  Input,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";

import { randomID } from "../../core/utils/dic";
import useUsers from "../../effects/useUsers";

// import MakingExerciseDialog from "./components/makingExerciseDialog";

const setObj = {
  count: "",
  weight: "",
  desc: "",
};

export default function MakingView({ list, handleDelete }) {
  const { data, isLoading } = useUsers();
  const [sets, setSets] = useState([]);

  const [selectUser, setSelectUser] = useState({
    id: "",
    name: "",
  });

  const [makingModal, setMakingModal] = useState({
    isOpen: false,
  });
  const [userModal, setUserModal] = useState({
    isOpen: false,
  });

  useEffect(() => {
    const items = list.map(({ id, ...rest }) => {
      const findSet = sets.find((s) => s.id === id);
      return {
        id,
        info: { ...rest },
        list: findSet ? [...findSet.list] : [],
      };
    });
    setSets([...items]);
  }, [list]);

  const handleMakingModalClose = (e) =>
    setMakingModal({ ...makingModal, isOpen: false });

  const handleUserModalClose = (e) =>
    setUserModal({ ...userModal, isOpen: false });

  const handleAddExerciseSet = (e, item) => {
    const copySets = [...sets];

    const findExerciseIndex = copySets.findIndex((set) => set.id === item.id);
    const findExercise = copySets[findExerciseIndex];
    if (findExercise.list.length > 10) {
      return;
    }
    findExercise.list.push({ ...setObj, id: randomID() });
    // const
    // console.log(copySets);
    setSets([...copySets]);
  };

  const handleDeleteExerciseSet = (e, setId, item) => {
    const copySets = [...sets];

    const findExerciseIndex = copySets.findIndex((set) => set.id === setId);
    const findExercise = copySets[findExerciseIndex];
    const findExerciseSetIndex = findExercise.list.findIndex(
      (l) => l.id === item.id
    );
    // console.log(findExerciseSetIndex)
    findExercise.list.splice(findExerciseSetIndex, 1);
    // console.log(copySets)
    setSets([...copySets]);
  };

  const handleSet = (e, setId, item) => {
    const { name } = e.target;
    let value = e.target.value;
    if (name !== "desc") {
      value = e.target.value.replace(/[^0-9]/, "");
    }
    const copySets = [...sets];

    const findExerciseIndex = copySets.findIndex((set) => set.id === setId);
    const findExercise = copySets[findExerciseIndex];
    const findExerciseSetIndex = findExercise.list.findIndex(
      (l) => l.id === item.id
    );
    const findExerciseSet = findExercise.list[findExerciseSetIndex];
    // console.log(findExerciseSet)
    findExerciseSet[name] = value;
    setSets([...copySets]);
  };

  const handleSelectUser = (e, user) => {
    setSelectUser({ ...user });
    setUserModal({
      ...userModal,
      isOpen: false,
    });
  };

  const openUserModal = () => {
    setUserModal({
      ...userModal,
      isOpen: true,
      title: "회원 선택",
    });
  };

  const openMakingModal = () => {
    if (sets.length > 0) {
      setMakingModal({
        ...makingModal,
        isOpen: true,
        title: "만들어진 운동",
      });
    } else {
      alert("운동을 추가해주세요");
    }
  };

  const submitUserTodayExercise = async () => {
    const exercises = JSON.stringify(sets).replace(/\"/g, '\\"');
    await axios.post("/today", { user_id: selectUser.id, exercises });
  };

  const handleClipboard = (e) => {
    alert("clip board 저장 준비중");
  };
  // console.log(sets);
  return (
    <>
      <Box ml={4} mt={3} mb={4}>
        <HStack justifyContent="flex-start">
          <Box>
            <Button size="sm" onClick={openUserModal}>
              {selectUser.name === "" ? "회원을 선택해주세요" : selectUser.name}
            </Button>{" "}
            {format(new Date(), "yyyy-MM-dd")}의 운동
          </Box>
          {/* <Button size="sm">전체 운동 요약</Button> */}
          <Button size="sm" onClick={openMakingModal}>
            오늘의 운동 만들기
          </Button>
        </HStack>
      </Box>
      <VStack alignItems="flex-start">
        <Accordion defaultIndex={[0]} allowMultiple w="full">
          {!list?.length && <Box m={2}>No Item</Box>}
          {list?.map((l) => (
            <AccordionItem key={l.id} mb={3} ml={4}>
              <h2>
                <AccordionButton backgroundColor="gray.300" borderRadius={5}>
                  <HStack>
                    <Box flex="1" textAlign="left">
                      {l.title}
                    </Box>
                    <Button
                      as="div"
                      size="sm"
                      onClick={(e) => handleDelete(e, l)}
                    >
                      x
                    </Button>
                  </HStack>
                  <AccordionIcon alignItems="flex-end" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="white">
                <VStack>
                  <Box>
                    <HStack>
                      <Box>set별로 설정하세요</Box>
                      <Button onClick={(e) => handleAddExerciseSet(e, l)}>
                        set 추가
                      </Button>
                    </HStack>
                  </Box>
                  <VStack>
                    {sets.length > 0 &&
                      sets
                        .find((s) => s.id === l.id)
                        ?.list.map((ll, index) => (
                          <HStack key={index}>
                            <Box w="full">set {index + 1}</Box>
                            <Input
                              placeholder="무게"
                              name="weight"
                              value={ll.weight}
                              onChange={(e) => handleSet(e, l.id, ll)}
                            />
                            <Input
                              placeholder="횟수"
                              name="count"
                              value={ll.count}
                              onChange={(e) => handleSet(e, l.id, ll)}
                            />
                            <Input
                              placeholder="설명"
                              name="desc"
                              value={ll.desc}
                              onChange={(e) => handleSet(e, l.id, ll)}
                            />
                            <Button
                              size="sm"
                              onClick={(e) =>
                                handleDeleteExerciseSet(e, l.id, ll)
                              }
                            >
                              x
                            </Button>
                          </HStack>
                        ))}
                  </VStack>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>

      <Modal
        {...makingModal}
        onClose={handleMakingModalClose}
        handleSubmit={submitUserTodayExercise}
        // handleDelete={handleDelete()}
      >
        {sets?.map((set) => (
          <>
            <Popover>
              <PopoverTrigger>
                <Button fontWeight={700}>{set.info?.title}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>설명</PopoverHeader>
                <PopoverBody>
                  {set.info.desc === "" ? "설명 없음" : set.info.desc}
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <List key={set.id} ml={2} mt={3} mb={3}>
              {set?.list?.map((l, index) => (
                <ListItem key={l.id}>
                  {index + 1}set - {l.count} 회 {l.weight} kg
                </ListItem>
              ))}
            </List>
          </>
        ))}
      </Modal>

      <Modal
        {...userModal}
        onClose={handleUserModalClose}
        handleSubmit={handleClipboard}
        // handleDelete={handleDelete()}
      >
        <Table>
          <Thead>
            <Tr>
              <Th>이름</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((d) => (
              <Tr
                key={d.id}
                _hover={{ bg: "gray.200" }}
                cursor="pointer"
                onClick={(e) => handleSelectUser(e, d)}
              >
                <Td>{d.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Modal>
    </>
  );
}
