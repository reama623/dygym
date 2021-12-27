import { Box } from "@chakra-ui/react";
import useCategoryItem from "../../effects/useCategoryItem";

export default function ExerciseView({ category, handleClick }) {
  const { data: exercises, isLoading } = useCategoryItem(category?.id);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (!exercises?.length) {
    return (
      <Box m={2} p={3} backgroundColor="gray.200" borderRadius={5}>
        운동이 없습니다
      </Box>
    );
  }

  return exercises?.map((exercise) => (
    <Box
      key={exercise.id}
      m={2}
      p={3}
      backgroundColor="gray.200"
      borderRadius={5}
      onClick={(e) => handleClick(e, exercise)}
    >
      {exercise.title}
    </Box>
  ));
}
