import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { logout } from "../components/helpers/user";
import { verifyUser } from "../js/verifications";

import Loader from "../components/Loader";
import UserInfoDisplay from "../components/UserInfoDisplay";
import UserPointProgression from "../components/UserPointProgression";
import UserPointHistory from "../components/UserPointHistory";

export default function UserDashboard() {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {

        async function fetch() {
            setLoading(true)
            const well = await verifyUser()
            .then((response) => {
                console.log(response)
                if (response == false) {
                    navigate('/user/login')
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
            {(loading ? <Loader/> : <div class="mx-auto text-left text-white flex-wrap max-w-screen-sm items-center justify-center">
            <UserInfoDisplay 
            user={JSON.parse(localStorage.getItem('user'))}
            hover={false}
            />
            <UserPointProgression
            user={JSON.parse(localStorage.getItem('user'))}
            />
            <UserPointHistory
            user={JSON.parse(localStorage.getItem('user'))}
            />
            <div class="fixed top-4 right-4">
            <button onClick={() => {
                logout()
                navigate("/user/login")
            }} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                Logout
            </button>
        </div>
            </div>)}
        </div>
    )
}