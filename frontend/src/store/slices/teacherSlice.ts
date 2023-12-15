import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: teachersRequest });
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/teachers`
      );
      dispatch({ type: teachersSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: teachersFailure, payload: error });
    }
  };
};

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