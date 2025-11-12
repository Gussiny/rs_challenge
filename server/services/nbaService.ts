import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.BALLDONTLIE_API_KEY;
if( !API_KEY ) {
  console.error( 'BALLDONTLIE_API_KEY is not set.' );
  process.exit( 1 );
}

const BASE_URL = 'https://api.balldontlie.io/v1';

export const getTeams = async () => {
    const response = await axios.get(`${BASE_URL}/teams`, {
        headers: {
            Authorization: API_KEY
        }
    });

    return response.data;
}