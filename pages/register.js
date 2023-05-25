import React, { useEffect } from "react";
import { asyncCurrentUser, asyncsignup } from "../store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const student = {
            firstname: "Sarthak",
            lastname: "Sharma",
            contact: 1234567890,
            city: "Bhopal",
            gender: "Male",
            email: "sar@thack.com",
            password: "123456",
        };
        dispatch(asyncsignup(student));
    };

    useEffect(() => {
        if (!isAuthenticated) dispatch(asyncCurrentUser());
        if (isAuthenticated) router.push("/auth/home");
    }, [isAuthenticated]);

    return (
        <div>
            <h1>Register</h1>
            <button onClick={SubmitHandler}>Register Student</button>
        </div>
    );
};

export default Register;
