import axios from "../../axiosconfig";

export const setStudent = () => async (dispatch, getState) => {
    try {
        const res = await axios.get("/");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        const res = await axios.post("/student");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

export const asyncsignup = (student) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/student/signup", student);
        asyncCurrentUser();
    } catch (error) {
        console.log(error);
    }
};
