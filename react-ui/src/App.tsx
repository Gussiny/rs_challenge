import { Button, CircularProgress } from "@mui/material";
import rsLogo from "./logo-with-name.png";
import "./App.css";
import { useState } from "react";
import { TeamList } from "./Components/TeamList";
import { getTeams } from "./services/teamServices"

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
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleTeamsFetch = async () => {
    setLoading(true);
    try {
      const response = await getTeams();
      setTeams(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Button
          variant="contained"
          target="_blank"
          href={README_URI}
          size="large"
          sx={{ m: 2, bgcolor: "#00003C" }}
          disableElevation
        >
          Instructions
        </Button>
        <Button
          variant="contained"
          target="_blank"
          href={`mailto:${CONTACT_EMAIL}?subject=RealSynch Developer Challenge`}
          size="large"
          sx={{ m: 2, bgcolor: "#00003C" }}
          disableElevation
        >
          Ask a Question
        </Button>
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
        <TeamList teams={teams} />
      </main>
    </div>
  );
};
