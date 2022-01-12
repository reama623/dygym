import { useRouter } from "next/router";
import { Grid, Paper, Box, Button, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Create() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" sx={{ mr: 2 }}>
            회원 선택 버튼
          </Button>
          <Box>{date}</Box>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Typography mt={2} mb={1}>
            운동 선택
          </Typography>
          <Box
            display="flex"
            flexDirection="flex-start"
            justifyContent="space-between"
            flexWrap="wrap"
            
          >
            <Button variant="contained" size="small">
              등
            </Button>
            <Button variant="contained" size="small">
              가슴
            </Button>
            <Button variant="contained" size="small">
              어깨
            </Button>
            <Button variant="contained" size="small">
              허벅지
            </Button>
            <Button variant="contained" size="small">
              이두
            </Button>
            <Button variant="contained" size="small">
              삼두
            </Button>
            <Button variant="contained" size="small">
              등
            </Button>
            <Button variant="contained" size="small">
              가슴
            </Button>
            <Button variant="contained" size="small">
              어깨
            </Button>
            <Button variant="contained" size="small">
              허벅지
            </Button>
            <Button variant="contained" size="small">
              이두
            </Button>
            <Button variant="contained" size="small">
              삼두
            </Button>
          </Box>
          {/* <Grid container spacing={2}>
            <Grid item xs={1} md={2}>
              
            </Grid>
            <Grid item xs={1} md={2}>
              
            </Grid>
            <Grid item xs={1} md={2}>
              
            </Grid>
            <Grid item xs={1} md={2}>
              
            </Grid>
            <Grid item xs={1} md={2}>
              
            </Grid>
            <Grid item xs={1} md={2}>
              
            </Grid>
          </Grid> */}
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>운동 만들기 폼</Item>
      </Grid>
    </Grid>
  );
}
