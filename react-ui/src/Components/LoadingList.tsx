import { Box, Divider, Skeleton, Stack } from "@mui/material";

export const LoadingList = () => {
  return (
    <Stack spacing={1} style={{marginTop: "1rem"}}>
      <Skeleton variant="rectangular" animation={"wave"} height={60} />
      <Divider />
      <Skeleton variant="rectangular" animation={"wave"} height={60} />
      <Divider />
      <Skeleton variant="rectangular" animation={"wave"} height={60} />
      <Divider />
      <Skeleton variant="rectangular" animation={"wave"} height={60} />
      <Divider />
    </Stack>
  );
};
