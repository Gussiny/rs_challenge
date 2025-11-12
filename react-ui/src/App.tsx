import { Box, Button, CircularProgress } from "@mui/material";
import rsLogo from "./logo-with-name.png";
import "./App.css";
import { TeamList } from "./Components/TeamList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { ErrorMessage } from "./Components/ErrorMessage";

const CONTACT_EMAIL = "paul@realsynch.com";
const README_URI =
  "https://github.com/ReWattInc/rs_challenge/blob/main/README.md";

type Team = {
  id: number;
  full_name: string;
  city: string;
  abbreviation: string;
};

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <Box width={"70%"}>
        <TeamList />
        <ErrorMessage />
      </Box>
    </div>
  );
};
