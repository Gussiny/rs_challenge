import { createSlice, isRejected } from "@reduxjs/toolkit";

interface MainState {
    error: string | null;
}

const initialState: MainState = {
    error: null
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(isRejected, (state, action) => {
            state.error = action.error?.message || "An unexpected error occurred while fetching data.";
        })
    }
});

export const { clearError } = mainSlice.actions;
export default mainSlice.reducer;