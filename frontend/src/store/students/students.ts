import { createSlice } from "@reduxjs/toolkit";

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