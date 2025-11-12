import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";

export const TeamListContent = ( {team, handleItemClick}) => {
  return (
    <ListItemButton
      key={team.id}
      divider
      onClick={() => handleItemClick(team.city)}
    >
      <ListItemText
        primary={team.full_name}
        secondary={`City: ${team.city} | Abbreviation: ${team.abbreviation}`}
      />
    </ListItemButton>
  );
};
