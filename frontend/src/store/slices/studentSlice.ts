import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: studentsRequest });
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/students`
      );
      dispatch({ type: studentsSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: studentsFailure, payload: error });
    }
  };
};


const initialState = {
    loading: false,
    students: [],
    error: {}
}

export const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        studentsRequest : (state, action) => {
            state.loading= true
        },
        studentsSuccess: (state, action) => {
            state.loading = false            
            state.students = action.payload
        },
        studentsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const studentsReducer = studentSlice.reducer;
export const { studentsRequest, studentsSuccess, studentsFailure} = studentSlice.actions;