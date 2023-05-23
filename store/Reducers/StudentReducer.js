import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    student: null,
};

export const studentSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    errors: [],
});

export const {} = studentSlice.actions;

export default studentSlice.reducer;
