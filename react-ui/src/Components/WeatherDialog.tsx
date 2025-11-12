import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Avatar,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/weatherServices";

export interface WeatherDialogProps {
  open: boolean;
  city: string;
  onOk: () => void;
  weatherInfo: WeatherResponse;
}

export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface WeatherResponse {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
}

export const WeatherDialog: React.FC<WeatherDialogProps> = ({
  open,
  city,
  onOk,
  weatherInfo,
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Weather in {city}</DialogTitle>
      <DialogContent>
        {weatherInfo ? (
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
        <Button onClick={onOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};
