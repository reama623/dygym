import { styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  CircularProgress,
} from "@mui/material";
import CategoryList from "./components/category.list";
import ExerciseList from "./components/exercises.list";
import { useState } from "react";
import useCategory from "../../effects/useCategory";
import { useSWRConfig } from "swr";
import axios from "axios";
import { useSnackbar } from "notistack";

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
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Exercises() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { data, isLoading, isValidating } = useCategory();
  const [selectCategory, setSelectCategory] = useState(null);
  const [modal, setModal] = useState({
    isOpen: false,
    key: "",
    type: true,
  });
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
  });

  const [input, setInput] = useState({
    category: {
      title: "",
      desc: "",
    },
    exercise: {
      title: "",
      desc: "",
    },
  });

  const openModal = (e, item, key, type) => {
    // e.stopPropagation();
    const newModal = {
      ...modal,
      isOpen: true,
      key,
      type,
      item,
    };
    setModal(newModal);
    setInput({
      ...input,
      [key]: {
        ...item,
      },
    });
  };

  const openDeleteModal = (e, item, type) => {
    e.stopPropagation();
    const newDeleteModal = {
      isOpen: true,
      key: type,
      item,
    };
    // if (type === "category") {
    //   newDeleteModal.submit = deleteCategory;
    // }
    // if (type === "exercise") {
    //   newDeleteModal.submit = deleteExercise;
    // }
    setDeleteModal(newDeleteModal);
  };
  const closeDeleteModal = (e) => {
    setDeleteModal({
      ...deleteModal,
      isOpen: false,
    });
  };
  const closeModal = () => {
    setModal({
      ...modal,
      isOpen: false,
    });
  };

  const handleCategory = (e, item) => {
    setSelectCategory(item);
  };

  const handleNameInput = (e) => {
    const { name: keyname, value } = e.target;
    const [key, name] = keyname.split("-");
    setInput({
      ...input,
      [key]: {
        ...input[key],
        [name]: value,
      },
    });
  };
  const handleDescInput = (e) => {
    const { name: keyname, value } = e.target;
    const [key, name] = keyname.split("-");
    setInput({
      ...input,
      [key]: {
        ...input[key],
        [name]: value,
      },
    });
  };

  const { mutate } = useSWRConfig();
  const createCategory = async (e, item) => {
    if (input.category.title === "") {
      enqueueSnackbar("이름을 입력해주세요", {
        variant: "error",
      });
      return;
    }
    // mutate("/get/category", "", false);

    try {
      await axios.post("/category", { ...input.category });

      mutate("/get/category");
    } catch (error) {
      // error
    } finally {
      closeModal();
    }
  };
  const deleteCategory = async (e, item) => {
    const { seq } = deleteModal.item;
    try {
      closeModal();
      closeDeleteModal();
      await axios.delete(`/category/${seq}`);
      mutate(`/get/category`);
      setSelectCategory(null);
    } catch (error) {
      console.log("error", error);
      enqueueSnackbar(
        "삭제가 실패하였습니다. 현상이 지속되면 관리자에게 문의 바랍니다.",
        { variant: "warning" }
      );
    } finally {
      enqueueSnackbar("삭제가 완료되었습니다.", { variant: "info" });
    }
  };
  const updateCategory = (e, item) => {
    e.stopPropagation();
    alert("update category");
  };

  const createExercise = async (e) => {
    // alert("create exercise");
    setModal({ ...modal, isOpen: false });
    await axios.post("/exercise", {
      ...input.exercise,
      id: selectCategory.seq,
    });

    mutate(["/get/category/list", selectCategory.seq]);
  };
  const updateExercise = (e, item) => {
    alert("update exercise");
  };
  const deleteExercise = async (e, item) => {
    // alert("delete exercise");
    closeModal();
    closeDeleteModal();
    mutate(["/get/category/list", selectCategory.seq]);
    try {
      await axios.delete(`/exercise/${modal.item.seq}`);
    } catch (error) {
      console.log("error", error);
      enqueueSnackbar(
        "삭제가 실패하였습니다. 현상이 지속되면 관리자에게 문의 바랍니다.",
        { variant: "warning" }
      );
    } finally {
      enqueueSnackbar("삭제가 완료되었습니다.", { variant: "info" });
    }

    mutate(["/get/category/list", selectCategory.seq]);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} xl={2}>
          <Item>
            <Box
              sx={{ height: 50, pl: 3 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography display="flex" alignItems="center">
                운동 분류
                {isValidating && <CircularProgress sx={{ ml: 2 }} size={15} />}
              </Typography>

              <Button onClick={(e) => openModal(e, null, "category", true)}>
                분류 생성
              </Button>
            </Box>
            {/* <Divider /> */}
            <CategoryList
              list={data}
              selectCategory={selectCategory}
              openModal={openModal}
              handleCategory={handleCategory}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={9} xl={10}>
          <Item>
            {/* <Divider /> */}
            {selectCategory ? (
              <ExerciseList category={selectCategory} openModal={openModal} />
            ) : (
              <Box
                height={500}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography>분류를 선택해 주세요</Typography>
              </Box>
            )}
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
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            {modal.key} {modal.type ? "생성" : "수정"}
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            생성해봅시다
          </Typography> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id={`name-modal-${modal.type}-${
                  modal.true ? "create" : "update"
                }`}
                label="분류 제목 입력"
                variant="outlined"
                value={input[modal.key]?.title}
                name={`${modal.key}-title`}
                onChange={handleNameInput}
                // defaultValue={!modal.type && modal.item.name}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id={`desc-modal-${modal.type}-${
                  modal.true ? "create" : "update"
                }`}
                label="분류 설명 입력"
                multiline
                maxRows={5}
                // defaultValue={!modal.type && modal.item.desc}
                onChange={handleDescInput}
                value={input[modal.key]?.desc}
                name={`${modal.key}-desc`}
                sx={{ width: "100%" }}
                // value={value}
                // onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box mt={2} display="flex" justifyContent="flex-end">
            {!modal.type && (
              <Button
                onClick={(e) => openDeleteModal(e, modal.item, modal.key)}
                color="error"
                variant="contained"
              >
                Delete
              </Button>
            )}
            {modal.type ? (
              <Button
                onClick={
                  modal.key === "category" ? createCategory : createExercise
                }
                variant="contained"
              >
                ok
              </Button>
            ) : (
              <Button
                onClick={
                  modal.key === "category" ? updateCategory : updateExercise
                }
                variant="contained"
              >
                update
              </Button>
            )}

            <Button onClick={closeModal} variant="contained">
              cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={deleteModal.isOpen}
        onClose={closeDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            {deleteModal.item?.title}를(을) 삭제하시겠습니까?
          </Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              onClick={
                deleteModal.key === "category" ? deleteCategory : deleteExercise
              }
            >
              ok
            </Button>
            <Button onClick={closeDeleteModal}>cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
