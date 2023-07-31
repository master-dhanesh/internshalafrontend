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
            email: "sheryians.community@gmail.com",
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
            <button onClick={SubmitHandler}>Student Signin</button>
            <Link href="/forget"> Forget Password ?</Link>
            <Link href="/auth/home">Homepage</Link>
        </div>
    );
};

export default Login;
