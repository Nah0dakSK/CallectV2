import React from "react";
import "./auth.css";
import { useAuth0 } from "@auth0/auth0-react";
import HomeP from "../home/home-auth";

export default function Logout() {
    const { isAuthenticated } = useAuth0();
    return(
        isAuthenticated && (
            <>
                <HomeP/>
            </>
    ))
}