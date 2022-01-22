import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import useUsers from "../../effects/useUsers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Manage() {
  const router = useRouter();
  const { data, isLoading, error } = useUsers("dygym", "trainer1");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRow = (e, item) => {
    router.push(`/manage/update?userid=${item}`);
  };
  return (
    <>
      <Stack>
        <Box mb={2} display="flex" justifyContent="space-between">
          <Typography variant="h5">회원 관리</Typography>
          <Button variant="contained" onClick={handleOpen}>
            등록
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">이름</TableCell>
                <TableCell align="center">트레이너</TableCell>
                <TableCell align="center">그룹</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((d) => (
                  <TableRow
                    sx={{ "&:hover": { backgroundColor: "#eee" } }}
                    onClick={(e) => handleRow(e, "jayden")}
                  >
                    <TableCell align="center">{d.name}</TableCell>
                    <TableCell align="center">{d.trainer_name}</TableCell>
                    <TableCell align="center">{d.group_name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            회원 등록
          </Typography>
          <Stack spacing={2}>
            <TextField placeholder="이름" />
            <TextField placeholder="아이디" />
            <FormControl>
              <InputLabel id="group-select">체육관 선택</InputLabel>
              <Select
                // placeholder="트레이너"
                label="체육관 선택"
                labelId="group-select"
                id="group-select-item"
              >
                <MenuItem value={10}>DYGYM</MenuItem>
                <MenuItem value={20}>보라카이짐</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="trainer-select">트레이너 선택</InputLabel>
              <Select
                // placeholder="트레이너"
                label="트레이너 선택"
                labelId="trainer-select"
                id="trainer-select-item"
              >
                <MenuItem value={10}>인준혁</MenuItem>
              </Select>
            </FormControl>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                color="error"
                sx={{ mr: 2 }}
                onClick={handleClose}
              >
                취소
              </Button>
              <Button variant="contained">등록</Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
