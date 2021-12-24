import { Grid, GridItem, ListItem, List, Box } from "@chakra-ui/react";
import { useState } from "react";
import useCategory from "../../effects/useCategory";
import ExerciseView from "./exerciseView";
import MakingView from "./makingView";

export default function Making() {
  const { data: category, isLoading } = useCategory();

  const [selectCategory, setSelectCategory] = useState(null);
  const [selectExercise, setSelectExercise] = useState(null);

  const [list, setList] = useState([]);

  const handleClickCategory = (e, item) => {
    setSelectCategory(item);
  };

  const handleClickExercise = (e, item) => {
    setSelectExercise(item);

    const copyList = [...list];
    const findExerciseIndex = list.findIndex((l) => l.id === item.id);

    if (findExerciseIndex !== -1) {
      return;
    }
    copyList.push(item);
    setList([...copyList]);
  };
  const handleDeleteListItem = (e, item) => {
    e.stopPropagation();
    const copyList = [...list];
    const findExerciseIndex = list.findIndex((l) => l.id === item.id);
    if (findExerciseIndex !== -1) {
      copyList.splice(findExerciseIndex, 1);
      setList([...copyList]);
    }
  };
  return (
    <>
      <Grid
        h="calc(100vh - 100px)"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <List>
            <ListItem
              backgroundColor="whiteAlpha.600"
              borderRadius={6}
              p="3"
              mb="2"
            >
              김지영
            </ListItem>
            <ListItem
              backgroundColor="whiteAlpha.600"
              borderRadius={6}
              p="3"
              mb="2"
            >
              박성일
            </ListItem>
          </List>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" p="3" h="200" overflowY="scroll">
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            {isLoading && "Loading..."}
            {!isLoading &&
              category.map((c) => (
                <Box
                  key={c.id}
                  m={2}
                  p={3}
                  backgroundColor="gray.200"
                  borderRadius={5}
                  onClick={(e) => handleClickCategory(e, c)}
                >
                  {c.name}
                </Box>
              ))}
          </Box>
        </GridItem>
        <GridItem
          colSpan={2}
          bg="papayawhip"
          h="200"
          overflowY="scroll"
          flexWrap="wrap"
        >
          {selectCategory != null && (
            <ExerciseView
              category={selectCategory}
              handleClick={handleClickExercise}
            />
          )}
        </GridItem>
        <GridItem colSpan={4} rowSpan={4} bg="tomato" overflowY="scroll">
          <MakingView list={list} handleDelete={handleDeleteListItem} />
        </GridItem>
      </Grid>
    </>
  );
}
