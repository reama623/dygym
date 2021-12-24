import { Box, HStack, VStack } from "@chakra-ui/react";

export default function MakingExerciseDialog({ sets }) {
  if (!sets) {
    return <Box>No Sets</Box>;
  }
  return sets?.map((set) => (
    <Box key={set.id}>
      <VStack>
        <Box>{set.info.name}</Box>
        <Box>
          {set?.list?.map((l) => (
            <Box key={l.id}>
              <HStack>
                <Box>{l.count}</Box>
                <Box>{l.weight}</Box>
                <Box>{l.desc}</Box>
              </HStack>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  ));
}
