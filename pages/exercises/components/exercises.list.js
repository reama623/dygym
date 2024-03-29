import { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useCategoryItem from "../../../effects/useCategoryItem";

export default function ExerciseList({ category, openModal }) {
  const [hover, setHover] = useState(0);
  const { data, isLoading, isValidating } = useCategoryItem(category?.seq);

  return (
    <>
      <Box
        sx={{ height: 50, pl: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography>
          {category?.title}
          {isValidating && <CircularProgress size={16} />}
        </Typography>
        <Button onClick={(e) => openModal(e, null, "exercise", true)}>
          운동 생성
        </Button>
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {data ? (
          data.map((item, i) => {
            return (
              <ListItem
                key={i}
                alignItems="flex-start"
                sx={{
                  "&:hover": {
                    backgroundColor: "#eee",
                  },
                }}
                onClick={(e) => openModal(e, item, "exercise", false)}
              >
                <ListItemText
                  primary={item.title}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.desc}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            );
          })
        ) : (
          <ListItem alignItems="flex-start">
            <ListItemText primary="운동이 없습니다" />
          </ListItem>
        )}

        {/* <Divider variant="inset" component="li" /> */}
      </List>
      {/* <Grid container>
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
              // onClick={(e) => openModal(e, item, "exercise", false)}
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
      </Grid> */}
    </>
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
