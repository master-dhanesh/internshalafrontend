import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const myapplication = () => {
    const router = useRouter();
    const { isAuthenticated, student } = useSelector(
        (state) => state.StudentReducer
    );
    const { jobs, internships } = student;

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated]);
    return (
        <div>
            <h2>Jobs List</h2>
            {jobs &&
                jobs.map((j) => {
                    return <p key={j._id}>{j.title}</p>;
                })}
            <hr />
            <h2>Jobs List</h2>
            {internships &&
                internships.map((i) => {
                    return <p key={i._id}>{i.profile}</p>;
                })}
        </div>
    );
};

export default myapplication;
