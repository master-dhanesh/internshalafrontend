import { asyncCurrentUser, setStudent } from "@/store/Actions/StudentActions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const index = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);
    console.log(isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) dispatch(asyncCurrentUser());
        if (isAuthenticated) router.push("/auth/home");
    }, [isAuthenticated]);

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
