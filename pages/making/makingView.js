import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Input,
  VStack,
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverFooter,
  Portal,
  PopoverContent,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function MakingView({ list, handleDelete }) {
  if (!list.length) {
    return "no item";
  }
  const [sets, setSets] = useState([]);

  const handleAddExerciseSet = (e, item) => {
    const copySets = [...sets];

    const findExercise = copySets.find((set) => set.id === item.id);
    console.log(findExercise);
  };

  useEffect(() => {
    const items = list.map(({ id }) => ({ id, list: [] }));
    setSets([...items]);
  }, [list]);

  const handleABC = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <VStack alignItems="flex-start">
      <Box ml={4} mt={3}>
        <HStack justifyContent="space-between">
          <Box>회원 {format(new Date(), "yyyy-MM-dd")}의 운동</Box>
          <Button size="sm">전체 운동 요약</Button>
          <Button size="sm">오늘의 운동 만들기</Button>
        </HStack>
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple w="full">
        {list.map((l) => (
          <AccordionItem key={l.id} mb={3} m={2}>
            <h2>
              <AccordionButton backgroundColor="gray.300" borderRadius={5}>
                <HStack>
                  <Box flex="1" textAlign="left">
                    {l.name}
                  </Box>
                  <Popover onClick={handleABC}>
                    <PopoverTrigger>
                      <Button>Trigger</Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Button colorScheme="blue">Button</Button>
                        </PopoverBody>
                        <PopoverFooter>This is the footer</PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                  <Button size="sm" onClick={(e) => handleDelete(e, l)}>
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
                  <HStack>
                    <Box>set</Box>
                    <Input placeholder="무게" />
                    <Input placeholder="횟수" />
                    <Input placeholder="설명" />
                  </HStack>
                  <HStack>
                    <Box>set</Box>
                    <Input placeholder="무게" />
                    <Input placeholder="횟수" />
                    <Input placeholder="설명" />
                  </HStack>
                  <HStack>
                    <Box>set</Box>
                    <Input placeholder="무게" />
                    <Input placeholder="횟수" />
                    <Input placeholder="설명" />
                  </HStack>
                  <HStack>
                    <Box>set</Box>
                    <Input placeholder="무게" />
                    <Input placeholder="횟수" />
                    <Input placeholder="설명" />
                  </HStack>
                </VStack>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
}
