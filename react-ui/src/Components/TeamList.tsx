import React, { useState } from "react";
import { Box, Button, CircularProgress, List } from "@mui/material";
import { WeatherDialog } from "./WeatherDialog";
import { TeamListContent } from "./TeamListContent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchWeather } from "../features/weather/weatherSlice";
import { fetchTeams } from "../features/teams/teamsSlice";
import { LoadingList } from "./LoadingList";
import { Team } from "../types/teamTypes";

export const TeamList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list: teams, loading } = useSelector(
    (state: RootState) => state.teams
  );

  const [open, setOpen] = useState(false);

  const handleTeamsFetch = async () => {
    await dispatch(fetchTeams());
  };

  const handleItemClick = async (city: string) => {
    try {
      setOpen(true);
      /* Unwrap used in order to handle the error on catch statement */
      await dispatch(fetchWeather(city)).unwrap();
    } catch (error) {
      setOpen(false);
    }
  };

  const handleOkButton = () => {
    setOpen(false);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleTeamsFetch}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Fetch teams info"
        )}
      </Button>
      {loading ? (
        <LoadingList />
      ) : (
        <List component={"nav"} style={{marginTop: "1rem"}}>
          {teams.map((team: Team) => {
            return (
              <TeamListContent
                key={team.id}
                team={team}
                handleItemClick={handleItemClick}
              />
            );
          })}
        </List>
      )}

      <WeatherDialog open={open} onOk={handleOkButton} />
    </Box>
  );
};
