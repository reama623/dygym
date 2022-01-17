import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Update() {
  const router = useRouter();
  const { query } = router;
  return (
    <Stack>
      <Typography>
        회원 수정 {`>`} <Typography>{query.userid}</Typography>
      </Typography>
    </Stack>
  );
}
