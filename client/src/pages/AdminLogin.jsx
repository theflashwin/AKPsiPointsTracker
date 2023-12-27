import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { verifyIsAdmin } from "../js/verifications";

import LoginForm from "../components/LoginForm";

// middlewares

export default function AdminLogin() {

    const navigate = useNavigate()

    useEffect(() => {
        if (verifyIsAdmin() == true) {
            navigate('/admin/dashboard')
        } else {

        }
    })

    return (
        <div>
            <h1 className="text-white py-5 text-2xl">Admin Login</h1>
            <LoginForm/>
        </div>
    )

}