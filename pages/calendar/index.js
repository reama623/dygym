import { Grid, Paper, Stack, styled } from "@mui/material";
import { Box } from "@mui/system";

import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ko } from "date-fns/locale";

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

export default function Calendar() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <BigCalendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
          />
        </Item>
      </Grid>
      {/* <Grid item md={9} sm={12}>
          <Item>xs=9</Item>
        </Grid> */}
    </Grid>
  );
}
