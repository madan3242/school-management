import axios from "axios";
import { teachersFailure, teachersRequest, teachersSuccess } from "./teachers";

export const fetchTeachers = () => {
    return async (dispatch) => {
        try {
            dispatch({type: teachersRequest})
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/teachers`);
            dispatch({type: teachersSuccess, payload: response.data})
        } catch (error) {
            dispatch({type: teachersFailure, payload: error})
        }
    }
};
