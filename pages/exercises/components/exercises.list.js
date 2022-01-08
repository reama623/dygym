import { Box, CardContent, Typography } from "@mui/material";

export default function ExerciseList() {
  return (
    <>
      <Box display="flex" flexWrap="wrap">
        <Box border="1px solid black" margin={1}>
          <Card />
        </Box>
        <Box border="1px solid black" margin={1}>
          <Card />
        </Box>
        <Box border="1px solid black" margin={1}>
          <Card />
        </Box>
        <Box border="1px solid black" margin={1}>
          <Card />
        </Box>
        <Box border="1px solid black" margin={1}>
          <Card />
        </Box>
        <Box border="1px solid black" margin={1}>
          <Card />
        </Box>
        <Box border="1px solid black" margin={1}>
          <Card />
        </Box>
      </Box>
    </>
  );
}

function Card() {
  return (
    <>
      <CardContent>
        <Typography variant="h5" component="div">
          exercise name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          category name
        </Typography>
        <Typography variant="body2">exercise infomation</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </>
  );
}
