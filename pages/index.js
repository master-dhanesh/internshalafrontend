import { setStudent } from "@/store/Actions/StudentActions";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

const index = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.StudentReducer);
    console.log(student);
    return (
        <div>
            <h1>This is Homepage</h1>
            <Link href="/login">Login Page</Link>
            <br />
            <br />
            <Link href="/register">Register Page</Link>
            <hr />

            <button onClick={() => dispatch(setStudent())}>Run Action</button>
        </div>
    );
};

export default index;
