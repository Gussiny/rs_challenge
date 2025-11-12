import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./features/mainSlice";
import teamsReducer from "./features/teams/teamsSlice";
import weatherReducer from "./features/weather/weatherSlice";

export const store = configureStore( {
    reducer: {
        main: mainReducer,
        teams: teamsReducer,
        weather: weatherReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>