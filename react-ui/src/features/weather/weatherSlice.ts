import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getWeatherByCity } from "../../services/weatherServices";
import { WeatherState } from "../../types/weatherTypes";

const initialState: WeatherState = {
  city: null,
  data: null,
  loading: false
}

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city: string) => {
  const response = await getWeatherByCity(city);
  return { city, data: response };
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.city = action.payload.city;
        state.data = action.payload.data.current;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
      })
  }
});

export default weatherSlice.reducer;