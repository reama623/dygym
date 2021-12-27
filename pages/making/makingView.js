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
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";

import { randomID } from "../../core/utils/dic";

// import MakingExerciseDialog from "./components/makingExerciseDialog";

const setObj = {
  count: "",
  weight: "",
  desc: "",
};

export default function MakingView({ list, handleDelete }) {
  const [sets, setSets] = useState([]);

  const [modal, setModal] = useState({
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

  const handleModalClose = (e) => setModal({ ...modal, isOpen: false });

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

  const handleSubmit = () => {
    setModal({
      ...modal,
      isOpen: true,
      title: "만들어진 운동",
    });
  };

  const handleClipboard = (e) => {
    alert("clip board 저장 준비중");
  };
  // console.log(sets);
  return (
    <>
      <Box ml={4} mt={3}>
        <HStack justifyContent="flex-start">
          <Box>회원 {format(new Date(), "yyyy-MM-dd")}의 운동</Box>
          <Button size="sm">전체 운동 요약</Button>
          <Button size="sm" onClick={handleSubmit}>
            오늘의 운동 만들기
          </Button>
        </HStack>
      </Box>
      <VStack alignItems="flex-start">
        <Accordion defaultIndex={[0]} allowMultiple w="full">
          {!list?.length && "No Item"}
          {list?.map((l) => (
            <AccordionItem key={l.id} mb={3} m={2}>
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
        {...modal}
        onClose={handleModalClose}
        handleSubmit={handleClipboard}
        // handleDelete={handleDelete()}
      >
        {/* <MakingExerciseDialog sets={sets} /> */}
        {sets?.map((set) => (
          <>
            <Box>{set.info?.title}</Box>
            <List key={set.id} mb={3}>
              {set?.list?.map((l, index) => (
                <ListItem key={l.id}>
                  {index + 1}set - {l.count} 회 {l.weight} kg
                </ListItem>
              ))}
            </List>
          </>
          // <VStack key={set.id}>
          //   <Box w="full" textAlign="left">
          //     {set.info.name}
          //   </Box>
          //   <Box w="full">
          //     <Table>
          //       <Thead>
          //         <Tr>
          //           <Th>무게</Th>
          //           <Th>횟수</Th>
          //           <Th>설명</Th>
          //         </Tr>
          //       </Thead>
          //       <Tbody>
          //         {set?.list?.map((l) => (
          //           <Tr key={l.id}>
          //             <Td>{l.weight} kg</Td>
          //             <Td>{l.count} 회</Td>
          //             <Td>{l.desc}</Td>
          //           </Tr>
          //         ))}
          //       </Tbody>
          //     </Table>
          //   </Box>
          // </VStack>
        ))}
        {/* <Box fontWeight={700}>저장 데이터 샘플</Box>
        <Code w="full">{JSON.stringify(sets)}</Code> */}
      </Modal>
    </>
  );
}
