import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    teachers: [],
    error: {}
}

export const teachersSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    teachersRequest: (state, action) => {
      state.loading = true;
    },
    teachersSuccess: (state, action) => {
      state.loading = false;
      state.teachers = action.payload;
    },
    teachersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const teachersReducer = teachersSlice.reducer;
export const { teachersRequest, teachersSuccess, teachersFailure} = teachersSlice.actions;