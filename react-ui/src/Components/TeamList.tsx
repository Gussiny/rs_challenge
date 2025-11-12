import React, { useState } from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { WeatherDialog } from "./WeatherDialog";
import { getWeatherByCity } from "../services/weatherServices";
import { TeamListContent } from "./TeamListContent";

export interface Team {
  id: number;
  full_name: string;
  city: string;
  abbreviation: string;
}

export interface TeamListProps {
  teams?: Team[];
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

export const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [weatherinfo, setWeatherinfo] = useState<WeatherResponse | null>(null);
  const [open, setOpen] = useState(false);

  const handleItemClick = async (city: string) => {
    console.log("City: ", city);
    setSelectedCity(city);
    try {
      const cityWeather = await getWeatherByCity(city);
      console.log(cityWeather.current);
      setWeatherinfo(cityWeather.current);
    } catch (error) {}
    setOpen(true);
  };

  const handleOkButton = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>NBA Teams</h2>
      <List component={"nav"}>
        {teams.map((team) => {
          return team.city && (
            <TeamListContent key={team.id} team={team} handleItemClick={handleItemClick} />
          );
        })}
      </List>

      <WeatherDialog
        open={open}
        city={selectedCity}
        onOk={handleOkButton}
        weatherInfo={weatherinfo}
      />
    </div>
  );
};
