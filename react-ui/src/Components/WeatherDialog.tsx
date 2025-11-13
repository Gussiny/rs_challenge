import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface WeatherDialogProps {
  open: boolean;
  onOk: () => void;
}

export const WeatherDialog: React.FC<WeatherDialogProps> = ({
  open,
  onOk,
}) => {
  const { city, data: weatherInfo, loading} = useSelector((state: RootState) => state.weather);
  return (
    <Dialog open={open}>
      <DialogTitle>Weather in {city}</DialogTitle>
      <DialogContent>
        {!loading && weatherInfo ? (
          <Box display={"flex"} alignItems={"flex-start"} flexDirection={"column"}>
            <Box display={"flex"} alignItems={"center"}>
              <Avatar
                alt={weatherInfo.condition.text}
                src={weatherInfo.condition.icon}
              />
              <Typography variant="h6">{weatherInfo.condition.text}</Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="secondary">
                {weatherInfo.temp_c} °C / {weatherInfo.temp_f} °F
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">
                Last updated: {weatherInfo.last_updated}
              </Typography>
            </Box>
          </Box>
        ) : (
          <CircularProgress />
        )}
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} onClick={onOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};
