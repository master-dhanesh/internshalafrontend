import React from "react";
import { asyncsignup } from "../store/Actions/StudentActions";
import { useDispatch } from "react-redux";

const Register = () => {
    const dispatch = useDispatch();
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

    return (
        <div>
            <h1>Register</h1>
            <button onClick={SubmitHandler}>Register Student</button>
        </div>
    );
};

export default Register;
