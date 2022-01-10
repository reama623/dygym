import {
  Button,
  Divider,
  Grid,
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
    title: "sample",
    start: new Date("2022", "0", "10"),
    end: new Date("2022", "0", "10"),
    info: {
      userId: "admin",
      name: "김지영",
      exercise: {},
    },
  },
  {
    title: "sample2",
    start: new Date("2022", "0", "11"),
    end: new Date("2022", "0", "11"),
  },
];

export default function Calendar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const [popover, setPopover] = useState({
    key: true,
  });

  const handleSelectSlot = (info) => {
    setPopover({
      ...popover,
      key: true,
    });
  };
  const handleSelectEvent = (event, e) => {
    console.log(e, event);
    setAnchorEl(e.target);
    setPopover({
      ...popover,
      key: false,
    });
  };

  const handleSelectEventClose = (e) => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "event-popover" : undefined;

  const clickEvent = (e) => {
    if (e.target.getAttribute("class").indexOf("rbc-day-bg") !== -1) {
      setAnchorEl(e.target);
    }
  };

  useEffect(() => {
    window.addEventListener("click", clickEvent);
    return () => {
      window.removeEventListener("click", clickEvent);
    };
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              selectable={true}
              style={{ height: 700 }}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
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
      >
        {popover.key && <CreateExercise />}
        {!popover.key && <DetailExercise />}
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
      </Popover>
    </>
  );
}

function CreateExercise({ date = new Date() }) {
  console.log(date);
  return (
    <Box>
      <Typography pt={1} pl={2} pb={1} variant="h6">
        운동 생성
      </Typography>
      <Divider />
      <Box p={2} width={350}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            운동 선택
          </Grid>
          <Grid item xs={12}>
            운동 만들기
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
// function UpdateExercise() {
//   return <div>update</div>;
// }

function DetailExercise() {
  return <div>detail</div>;
}
