import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import {
  Grid,
  Box,
  Button,
  Popover,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import { Save as SaveIcon, Cancel as CancelIcon } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import TodayInfo from "./components/todayInfo";
import ExerciseInfo from "./components/exerciseInfo";
import TodayExercise from "./components/todayExercise";
import useUsers from "../../../effects/useUsers";

export default function Create() {
  const router = useRouter();
  const { date } = router.query;

  const { data: users, isLoading, error } = useUsers("dygym", "trainer1");

  // const createDate = date ? formatDate(date, "PPPP") : "날짜 선택";
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [user, setUser] = useState(null);
  const [category, setCategory] = useState(null);

  const [userExercises, setUserExercises] = useState([]);

  const handleCategory = (e, item) => {
    setCategory(item);
  };
  const handleCancelExercise = (e) => {
    setCategory(null);
  };

  const [cancelOpen, setCancelOpen] = useState(false);
  const cancelCreate = (e) => {
    setCancelOpen(true);
  };
  const closeCancel = (e) => {
    setCancelOpen(false);
  };
  const closeOk = (e) => {
    router.push("/calendar");
  };

  const handleExercise = (e, item) => {
    const userExerciseList = [...userExercises];
    const userExIndex = userExerciseList.findIndex((userEx) => userEx.seq === item.seq);

    if (userExIndex !== -1) {
      // userExerciseList.splice(userExIndex, 1);
      enqueueSnackbar("이미 추가된 운동 입니다", { variant: "warning" });
      return;
    } else {
      userExerciseList.push(item);
    }
    console.log(item)
    console.log(userExerciseList)
    // setUserExercises([...userExerciseList]);
  };
  const deleteUserExercise = (e, item) => {
    const userExerciseList = [...userExercises];
    const userExIndex = userExerciseList.findIndex((userEx) => userEx === item);
    userExerciseList.splice(userExIndex, 1);
    setUserExercises([...userExerciseList]);
  };

  const [cal, setCal] = useState(new Date());
  const handleDateChange = (newValue) => {
    setCal(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeAnchor = (e) => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "user-popover" : undefined;

  const handleUserClick = (e, item) => {
    setUser(item);
    closeAnchor();
  };
  useEffect(() => {
    if (date) {
      setCal(new Date(date));
    }
  }, [date]);

  return (
    <>
      <Grid container spacing={2}>
        <TodayInfo
          cal={cal}
          user={user}
          handleDateChange={handleDateChange}
          openAnchor={openAnchor}
        />
        <Grid item xs={3}>
          <Box display="flex">
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 2 }}
              onClick={cancelCreate}
            >
              <CancelIcon />
            </Button>
            <Button variant="contained">
              <SaveIcon />
            </Button>
          </Box>
        </Grid>
        <ExerciseInfo
          category={category}
          handleCategory={handleCategory}
          handleExercise={handleExercise}
          handleCancelExercise={handleCancelExercise}
        />
        <TodayExercise
          userExercises={userExercises}
          deleteUserExercise={deleteUserExercise}
        />
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closeAnchor}
        anchorOrigin={{ vertical: "center", horizontal: "right" }}
        transformOrigin={{ vertical: "center", horizontal: "left" }}
      >
        <List>
          {users?.map((user, i) => (
            <ListItem
              sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#eee" } }}
              onClick={(e) => handleUserClick(e, user)}
              key={i}
            >
              {user.name}
            </ListItem>
          ))}
        </List>
      </Popover>
      <Dialog
        open={cancelOpen}
        onClose={closeCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">운동 만들기 취소</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            작성했던 내용은 사라집니다. 취소하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCancel} variant="contained">
            취소
          </Button>
          <Button
            onClick={closeOk}
            autoFocus
            variant="contained"
            color="secondary"
          >
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
