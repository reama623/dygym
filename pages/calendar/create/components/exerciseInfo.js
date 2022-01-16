import { Box, Button, Grid, Typography } from "@mui/material";

export default function ExerciseInfo({
  category,
  handleCategory,
  handleExercise,
  handleCancelExercise,
}) {
  return (
    <Grid item xs={12}>
      <Typography mt={2} mb={1} display="flex" alignItems="center">
        <Typography mt={1} mb={1}>
          운동 선택
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
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={(e) => handleCategory(e, "등")}
          >
            등
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={(e) => handleCategory(e, "허벅지")}
          >
            허벅지
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={(e) => handleCategory(e, "이두")}
          >
            이두
          </Button>
        </Box>
      )}

      {category != null && (
        <Box>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color="secondary"
            onClick={(e) => handleExercise(e, "렛풀 다운")}
          >
            렛풀 다운
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color="secondary"
            onClick={(e) => handleExercise(e, "바벨 레터럴 레이즈")}
          >
            바벨 레터럴 레이즈
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color="secondary"
            onClick={(e) => handleExercise(e, "사이드 레터럴 레이즈")}
          >
            사이드 레터럴 레이즈
          </Button>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color="secondary"
            onClick={(e) => handleExercise(e, "덤벨 로우")}
          >
            덤벨 로우
          </Button>
        </Box>
      )}
    </Grid>
  );
}
