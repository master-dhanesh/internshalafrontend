import { asyncsignout } from "@/store/Actions/StudentActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Home = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);

    useEffect(() => {
        if (!isAuthenticated) router.push("/login");
    }, [isAuthenticated]);

    return (
        <div>
            <h1>Login First Page</h1>
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>My Applications</li>
                    <li>Edit Resume</li>
                    <li>Manage Account</li>
                    <li onClick={() => dispatch(asyncsignout())}>Logout</li>
                </ul>
            </div>
            <p>Will Show jobs </p>
        </div>
    );
};

export default Home;
