import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { verifyUser } from "../js/verifications";
import Loader from "../components/Loader";
import UserLoginForm from "../components/UserLoginForm";

export default function UserLogin() {

    const [loading, setLoading] = useState(true)
    
    const navigate = useNavigate()

    useEffect(() => {

        async function fetch() {
            setLoading(true)
            const well = await verifyUser()
            .then((response) => {
                console.log(response)
                if (response == true) {
                    navigate('/user/dashboard')
                } else {
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
        }

        if (loading == true) {
            fetch()
        }

    })

    return (
        <div>
            {(loading ? <Loader/> : <div>
                <h1 className="text-white text-2xl mb-4">Login</h1>
                <UserLoginForm/>
                <a className="text-white text-xl m-4 text-bold underline">Reset Password</a>
            </div>)}
        </div>
    )

}