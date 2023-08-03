import { asyncsignout, asyncCurrentUser } from "@/store/Actions/StudentActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "@/axiosconfig";
import Link from "next/link";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [internships, setInternships] = useState([]);
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated, student } = useSelector(
        (state) => state.StudentReducer
    );

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

    const ApplyJob = async (id) => {
        try {
            const res = await axios.post("/student/apply/job/" + id);
            console.log(res.data);
            dispatch(asyncCurrentUser());
        } catch (error) {
            console.log(error);
        }
    };

    const ApplyInternship = async (id) => {
        try {
            const res = await axios.post("/student/apply/internship/" + id);
            console.log(res.data);
            dispatch(asyncCurrentUser());
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

    const LogoutHandler = () => {
        router.push("/login");
        dispatch(asyncsignout());
    };

    return (
        <div>
            <h1>Login First Page</h1>
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>
                        <Link href="/myapplication"> My Applications</Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="/editresume">Edit Resume</Link>
                    </li>
                    <li>Manage Account</li>
                    <li onClick={LogoutHandler}>Logout</li>
                </ul>
            </div>
            <hr />
            <h1>Welcome {student && student.firstname}</h1>
            <img width={200} src={student && student.avatar.url} alt="" />
            <hr />
            <h2>Jobs List</h2>
            {jobs &&
                jobs.map((j) => {
                    return (
                        <p key={j._id}>
                            {j.title}
                            <button onClick={() => ApplyJob(j._id)}>
                                Apply
                            </button>
                        </p>
                    );
                })}
            <hr />
            <h2>Internships List</h2>
            {internships &&
                internships.map((i) => {
                    return (
                        <p key={i._id}>
                            {i.profile}
                            <button onClick={() => ApplyInternship(i._id)}>
                                Apply
                            </button>
                        </p>
                    );
                })}
        </div>
    );
};

export default Home;
