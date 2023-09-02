import React from "react";
import "./auth.css";
import { useAuth0 } from "@auth0/auth0-react";
import HomeE from "../home/home";

export default function Login() {
    const { isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
        <>
            <HomeE/>
        </>
        )
    )
}