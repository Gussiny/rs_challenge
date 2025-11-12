import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { getTeams } from "../../services/teamServices";
import { TeamsState } from "../../types/teamTypes";

const initialState: TeamsState = {
  list: [],
  loading: false
};

export const fetchTeams = createAsyncThunk("teams/fetchTeams", async () => {
  const response = await getTeams();
  return response.data; 
});

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
      })
  }
});

export default teamsSlice.reducer;