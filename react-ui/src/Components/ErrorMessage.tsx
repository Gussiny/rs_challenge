import { Alert, Snackbar, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clearError } from "../features/mainSlice";

export const ErrorMessage = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.main.error);

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={!!error}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">{error}</Alert>
    </Snackbar>
  );
};
