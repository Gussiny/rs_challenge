import { Box, Divider, Skeleton, Stack } from "@mui/material";

export const LoadingList = () => {
  return (
    <Stack spacing={1}>
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
