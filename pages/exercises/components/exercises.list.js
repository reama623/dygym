import { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useCategoryItem from "../../../effects/useCategoryItem";

export default function ExerciseList({ category, openModal }) {
  const [hover, setHover] = useState(0);
  const { data, isLoading } = useCategoryItem(category?.seq);
  return (
    <Grid container>
      {data?.length > 0 ? (
        data.map((item, i) => (
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
        ))
      ) : (
        <Grid item xs={3} md={3} xl={2}>
          <Card
            onClick={(e) => openModal(e, item, "exercise", false)}
            sx={{
              margin: 1,
              "&:hover": { backgroundColor: "#eee", cursor: "pointer" },
            }}
            // onMouseOver={}
          >
            {card({ item: { title: "운동 없음" }, hover })}
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

function card({ item, hover }) {
  return (
    <>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
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
