import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { useState } from "react";

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

export default function CategoryList({
  category,
  handleCategory,
  openModal,
  openDeleteModal,
}) {
  const [hover, setHover] = useState(0);
  const handleHover = (e, item) => {
    setHover(item.seq);
  };
  const handleHoverOut = (e, item) => {
    setHover(0);
  };
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
              "&:hover": { backgroundColor: "#eee" },
              borderRadius: 2,
              backgroundColor: c.seq === category?.seq ? "#eee" : "",
            }}
            onClick={(e) => handleCategory(e, c)}
            // onChangeActive={(e) => console.log("cc", c)}
            onMouseOver={(e) => handleHover(e, c)}
            onMouseLeave={(e) => handleHoverOut(e, c)}
          >
            <ListItemText primary={c.name} />
            {hover === c.seq && (
              <ListItemIcon onClick={(e) => openModal(e, c, "category", false)}>
                <EditIcon />
              </ListItemIcon>
            )}
            {hover === c.seq && (
              <ListItemIcon onClick={(e) => openDeleteModal(e, c, "category")}>
                <DeleteIcon />
              </ListItemIcon>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}
