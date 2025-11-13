import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Team } from "../types/teamTypes";
export interface TeamListContentProps {
  team: Team;
  handleItemClick: (city: string) => void;
}

export const TeamListContent: React.FC<TeamListContentProps> = ( {team, handleItemClick}) => {
  return (
    <ListItemButton
      key={team.id}
      divider
      onClick={() => handleItemClick(team.city)}
      disabled={team.city === "" ? true : false }
    >
      <ListItemText
        primary={team.full_name}
        secondary={`City: ${team.city} | Abbreviation: ${team.abbreviation}`}
      />
    </ListItemButton>
  );
};
