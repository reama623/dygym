import { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const items = [
  {
    name: "aa",
    desc: "aafaf",
  },
  {
    name: "b",
    desc: "ab",
  },
  {
    name: "c",
    desc: "afasd",
  },
  {
    name: "d",
    desc: "ffs",
  },
  {
    name: "e",
    desc: "ddfq",
  },
];

export default function ExerciseList({ openModal }) {
  const [hover, setHover] = useState(0);
  return (
    <Grid container>
      {items.map((item, i) => (
        <Grid key={i} item xs={3} md={3} xl={2}>
          <Card
            onClick={(e) => openModal(e, item, "exercise", false)}
            sx={{
              margin: 1,
              "&:hover": { backgroundColor: "#eee", cursor: "pointer" },
            }}
            // onMouseOver={}
          >
            {card({ item, hover })}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function card({ item, hover }) {
  console.log(hover);
  return (
    <>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          category name
        </Typography> */}
        <Typography variant="body2">{item.desc}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </>
  );
}
