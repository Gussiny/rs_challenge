import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
/* Check for the API key on the .env file, if not present then app closes */
const API_KEY = process.env.WEATHER_API_KEY;
if( !API_KEY ) {
  console.error( 'WEATHER_API_KEY is not set.' );
  process.exit( 1 );
}

const BASE_URL = 'https://api.weatherapi.com/v1';

export const getCurrent = async ( city: string ) => {
    const response = await axios.get(`${BASE_URL}/current.json`, {
        params: {
            q: city,
            key: API_KEY
        }
    });

    return response.data;
}