import { asyncCurrentUser, asyncsignin } from "@/store/Actions/StudentActions";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
const Login = () => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);
    const dispatch = useDispatch();
    const SubmitHandler = (e) => {
        e.preventDefault();
        const student = {
            email: "sar@thack.com",
            password: "123456",
        };
        dispatch(asyncsignin(student));
    };

    useEffect(() => {
        if (!isAuthenticated) dispatch(asyncCurrentUser());
        if (isAuthenticated) router.push("/auth/home");
    }, [isAuthenticated]);

    return (
        <div>
            <h1>Login In Page</h1>
            <button onClick={SubmitHandler}>Signin</button>
            <Link href="/auth/home">Homepage</Link>
        </div>
    );
};

export default Login;
