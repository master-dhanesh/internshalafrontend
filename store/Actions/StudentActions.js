import axios from "../../axiosconfig";

export const setStudent = () => async (dispatch, getState) => {
    try {
        const res = await axios.get("/");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
