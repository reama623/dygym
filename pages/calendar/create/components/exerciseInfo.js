import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import useCategory from "../../../../effects/useCategory";
import useCategoryItem from "../../../../effects/useCategoryItem";

export default function ExerciseInfo({
  category,
  handleCategory,
  handleExercise,
  handleCancelExercise,
}) {
  const { data, isValidating, isLoading, error } = useCategory();

  return (
    <Grid item xs={12}>
      <Typography mt={2} mb={1} display="flex" alignItems="center">
        <Typography
          mt={1}
          mb={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          운동 선택
          {isValidating && <CircularProgress sx={{ ml: 2 }} size={15} />}
        </Typography>
        {category != null ? (
          <Button
            sx={{ ml: 2 }}
            variant="contained"
            size="small"
            onClick={handleCancelExercise}
          >
            카테고리 선택
          </Button>
        ) : (
          ""
        )}
      </Typography>
      {category == null && (
        <Box
          display="flex"
          flexDirection="flex-start"
          justifyContent="flex-start"
          alignContent="flex-start"
          flexWrap="wrap"
        >
          {data?.map((d) => (
            <Button
              sx={{ m: 1 }}
              variant="contained"
              onClick={(e) => handleCategory(e, d)}
              key={d.seq}
            >
              {d.title}
            </Button>
          ))}
        </Box>
      )}

      {category != null && (
        <ExerciseList category={category} handleExercise={handleExercise} />
      )}
    </Grid>
  );
}

function ExerciseList({ category, handleExercise }) {
  const { data, isLoading, error } = useCategoryItem(category?.seq);
  return (
    <Box>
      {data?.map((exercise) => (
        <Button
          key={exercise.seq}
          sx={{ m: 1 }}
          variant="contained"
          color="secondary"
          onClick={(e) => handleExercise(e, exercise)}
        >
          {exercise.title}
        </Button>
      ))}
    </Box>
  );
}
