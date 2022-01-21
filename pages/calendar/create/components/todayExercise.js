import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

export default function TodayExercise({
  userExercises,
  handleExerciseItem,
  deleteUserExercise,
}) {
  return (
    <Grid item xs={12}>
      <Typography mt={1} mb={1} display="flex" alignItems="center">
        운동 만들기 폼
      </Typography>
      <Box>
        {userExercises?.map((exercise, i) => (
          <Grid container spacing={2} mb={2} key={i}>
            <Grid item xs={12} sm={2}>
              {/* <Typography>{exercise}</Typography> */}
              <Typography>{exercise.title}</Typography>
            </Grid>
            <Grid item xs={11} sm={9}>
              <TextField
                onChange={handleExerciseItem}
                name={`exercise-${exercise.seq}`}
                size="small"
                sx={{ mr: 2, width: "100%" }}
              />
            </Grid>
            <Grid item xs={1} sm={1}>
              <Button>
                <DeleteIcon onClick={(e) => deleteUserExercise(e, exercise)} />
              </Button>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Grid>
  );
}
