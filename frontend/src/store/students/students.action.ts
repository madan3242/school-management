import axios from "axios";
import { studentsFailure, studentsRequest, studentsSuccess } from "./students";

export const fetchStudents = () => {
    return async (dispatch) => {
        try {
            dispatch({type: studentsRequest})
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/students`)            
            dispatch({type: studentsSuccess, payload: response.data})
        } catch (error) {
            dispatch({type: studentsFailure, payload: error})
        }
    }
};
