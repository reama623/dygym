import {
  Button,
  Divider,
  Grid,
  Modal,
  Paper,
  Popover,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ko } from "date-fns/locale";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useTodayExercises from "../../effects/useTodayExercises";

const locales = {
  ko,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const events = [
  {
    title: "김지영",
    start: new Date("2022", "0", "10"),
    end: new Date("2022", "0", "10"),
    info: {
      userId: "kim",
      name: "김지영",
      exercise: {},
    },
  },
  {
    title: "박성일",
    start: new Date("2022", "0", "10"),
    end: new Date("2022", "0", "10"),
    info: {
      userId: "park",
      name: "박성일",
      exercise: {},
    },
  },
  {
    title: "박성일",
    start: new Date("2022", "0", "11"),
    end: new Date("2022", "0", "11"),
    info: {
      userId: "park",
      name: "박성일",
      exercise: {},
    },
  },
];

export default function Calendar() {
  const { data, isLoading } = useTodayExercises();
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElPosition, setAnchorElPosition] = useState({ left: 0, top: 0 });

  const [popover, setPopover] = useState({
    key: true,
  });

  const handleSelectSlot = (info) => {
    if (info.action === "click") {
      setPopover({
        ...popover,
        key: true,
        info: {
          date: info.start,
        },
      });
      setAnchorEl(document.querySelector(".date-click"));
      setAnchorElPosition({ use: true, left: info.box.x, top: info.box.y });
    }
  };
  const handleSelectEvent = (event, e) => {
    setAnchorEl(e.target);
    setAnchorElPosition({ ...anchorElPosition, use: false });
    setPopover({
      ...popover,
      key: false,
      info: { ...event },
    });
  };

  const handleSelectEventClose = (e) => {
    setAnchorEl(null);
    setAnchorElPosition({ use: false, left: 0, top: 0 });
  };
  const open = Boolean(anchorEl);
  const id = open ? "event-popover" : undefined;

  const customDayPropGatter = (date) => {
    return {
      className: "date-click",
    };
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <BigCalendar
              localizer={localizer}
              events={data}
              startAccessor="start"
              endAccessor="end"
              selectable={true}
              style={{ height: 700 }}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              dayPropGetter={customDayPropGatter}
              views={["month"]}
            />
          </Item>
        </Grid>
        {/* <Grid item md={9} sm={12}>
          <Item>xs=9</Item>
        </Grid> */}
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleSelectEventClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        // anchorReference="none"
        anchorReference={anchorElPosition.use ? "anchorPosition" : "anchorEl"}
        anchorPosition={{
          left: anchorElPosition.left,
          top: anchorElPosition.top,
        }}
      >
        {popover.key && <CreateExercise push={push} {...popover?.info} />}
        {!popover.key && (
          <DetailExercise
            push={push}
            {...popover?.info}
            closePopover={handleSelectEventClose}
          />
        )}
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
      </Popover>
    </>
  );
}

function CreateExercise({ push, date = new Date() }) {
  const handleCreate = (e) => {
    push(`/calendar/create?date=${format(date, "yyyy-MM-dd")}`);
  };
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="center" mb={2}>
        <Typography>{format(date, "yyyy-MM-dd")}</Typography>
      </Box>
      <Button variant="contained" onClick={handleCreate}>
        운동 추가
      </Button>
    </Box>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DetailExercise({ push, start, info, closePopover }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const selectDate = format(start, "yyyy-MM-dd");
  const handleUpdate = (e) => {
    push(`/calendar/update/${info.userId}?date=${selectDate}`);
  };
  const handleDelete = (e) => {
    handleClose();
    closePopover();
  };
  return (
    <>
      <Box>
        <Typography pt={1} pl={2} pb={1} variant="h6">
          {info.name} 회원 <Typography>{selectDate}의 운동</Typography>
        </Typography>
        <Divider />
        <Box p={2} width={350}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button variant="contained" color="secondary">
                회원 선택
              </Button>
              <Typography>일자 : {format(date, "yyyy-MM-dd")}</Typography>
              <Button></Button>
            </Box>
          </Grid> */}
            <Grid item xs={12}>
              운동 만들기
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mr: 2 }}
                  onClick={handleOpen}
                >
                  삭제
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}
                >
                  수정
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
            {selectDate}
            <Typography>{info.name}님의 운동을 삭제하시겠습니까?</Typography>
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 2 }}
              onClick={handleDelete}
            >
              삭제
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              취소
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
