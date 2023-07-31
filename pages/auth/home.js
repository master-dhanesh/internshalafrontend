import { asyncsignout } from "@/store/Actions/StudentActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "@/axiosconfig";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [internships, setInternships] = useState([]);
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.StudentReducer);

    const GetJobs = async () => {
        try {
            const res = await axios.post("/student/alljobs");
            console.log(res.data.jobs);
            setJobs(res.data.jobs);
        } catch (error) {
            console.log(error);
        }
    };

    const GetInternships = async () => {
        try {
            const res = await axios.post("/student/allinternships");
            console.log(res.data.internships);
            setInternships(res.data.internships);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
        if (jobs.length === 0) GetJobs();
        if (internships.length === 0) GetInternships();
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
            <hr />
            {JSON.stringify(jobs)}
            <hr />
            {JSON.stringify(internships)}
        </div>
    );
};

export default Home;
