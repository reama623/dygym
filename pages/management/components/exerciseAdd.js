import { Box, Input, VStack } from "@chakra-ui/react";

export default function ExerciseAdd({ category, handleCategory }) {
  return (
    <VStack>
      <Box w="full" display="flex" alignItems="center" mb={2}>
        <Input
          placeholder="이름 입력"
          name="name"
          value={category.name}
          onChange={handleCategory}
        />
      </Box>
      <Box w="full">
        <Input
          placeholder="설명 입력"
          name="desc"
          value={category.desc}
          onChange={handleCategory}
        />
      </Box>
    </VStack>
  );
}
