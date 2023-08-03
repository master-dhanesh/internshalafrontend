import axios from "@/axiosconfig";
import { asyncCurrentUser } from "@/store/Actions/StudentActions";
import { useDispatch } from "react-redux";

const addeducation = () => {
    const dispatch = useDispatch();
    const AddEducation = async () => {
        try {
            const newedu = {
                status: "Pass",
                year: "2016",
                board: "ICSE",
                performance: "8.9",
                school: "St. Joseph",
            };
            const { data } = await axios.post("/resume/add-edu", newedu);
            dispatch(asyncCurrentUser());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Add Education</h1>
            <button onClick={AddEducation}> Add Education</button>
        </div>
    );
};

export default addeducation;
