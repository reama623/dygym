import { Grid, Box, TextField, Button, Typography } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";

import DateAdapter from "@mui/lab/AdapterDateFns";
import { useRouter } from "next/router";

export default function TodayInfo({ user, cal, handleDateChange, openAnchor }) {
  const {
    query: { type },
  } = useRouter();
  return (
    <Grid item xs={9}>
      <Box display="flex" alignItems="center">
        {/* <Button variant="contained">
    {createDate ? createDate : "error"}
  </Button> */}
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DesktopDatePicker
            disabled={type === "update"}
            label="운동 일자 선택"
            value={cal}
            inputFormat="yyyy-MM-dd"
            onChange={handleDateChange}
            renderInput={(params) => {
              return <TextField {...params} size="small" />;
            }}
          />
        </LocalizationProvider>
        <Typography mr={2} ml={2}></Typography>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={openAnchor}
          disabled={type === "update"}
        >
          {user != null ? user.name : "회원"}
        </Button>
        {user != null ? " 님" : ""}
      </Box>
    </Grid>
  );
}
