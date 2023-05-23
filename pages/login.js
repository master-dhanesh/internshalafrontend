import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <div>
            <h1>Login In Page</h1>
            <Link href="/auth/home">Homepage</Link>
        </div>
    );
};

export default Login;
