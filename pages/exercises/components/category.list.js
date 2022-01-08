import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";

const categoryList = [
  {
    seq: 1,
    name: "등",
  },
  {
    seq: 2,
    name: "어깨",
  },
  {
    seq: 3,
    name: "가슴",
  },
];

export default function CategoryList({ category, handleCategory }) {
  return (
    <List
      dense={true}
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     운동 분류
      //   </ListSubheader>
      // }
    >
      {categoryList.map((c) => {
        return (
          <ListItem
            key={c.seq}
            sx={{
              "&:hover": { backgroundColor: "gray" },
              borderRadius: 2,
              backgroundColor: c.seq === category?.seq ? "gray" : "",
            }}
            onClick={(e) => handleCategory(e, c)}
          >
            <ListItemText primary={c.name} />
          </ListItem>
        );
      })}
    </List>
  );
}
