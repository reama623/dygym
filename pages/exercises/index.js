import { styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Button,
  Divider,
  Modal,
} from "@mui/material";
import CategoryList from "./components/category.list";
import ExerciseList from "./components/exercises.list";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Exercises() {
  const [category, setCategory] = useState(null);
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
  });

  const openModal = (e, key) => {
    setModal({
      ...modal,
      isOpen: true,
      type: key,
    });
  };
  const closeModal = () => {
    setModal({
      ...modal,
      isOpen: false,
    });
  };

  const handleCategory = (e, item) => {
    setCategory(item);
  };
  const deleteCategory = (e, item) => {
    console.log(item);
  };
  const updateCategory = (e, item) => {
    console.log(item);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Item>
            <Box sx={{ height: 50, pl: 3 }} display="flex" alignItems="center">
              <Typography>운동 분류</Typography>
              <Button onClick={(e) => openModal(e, "category")}>
                분류 생성
              </Button>
            </Box>
            {/* <Divider /> */}
            <CategoryList category={category} handleCategory={handleCategory} />
          </Item>
        </Grid>
        <Grid item xs={12} md={9}>
          <Item>
            <Box sx={{ height: 50, pl: 3 }} display="flex" alignItems="center">
              <Typography>{category.name}</Typography>
              <Button onClick={(e) => openModal(e, "exercise")}>
                운동 생성
              </Button>
            </Box>
            {/* <Divider /> */}
            <ExerciseList />
          </Item>
        </Grid>
      </Grid>
      <Modal
        open={modal.isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal.type}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            생성해봅시다
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
