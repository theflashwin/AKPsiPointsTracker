import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom'
import { verifyIsAdmin } from "../js/verifications";
import { logout } from "../components/helpers/admin";
import UserInfoDisplay from "../components/UserInfoDisplay";

export default function AdminDashboard() {

    const [x, setX] = useState(true) // for rerendering

    const navigate = useNavigate()

    useEffect(() => {
        if (verifyIsAdmin() !== true) {
            navigate('/admin/login')
        } else {

        }
    })

    return (
        <div>
            <div className="w-screen text-white text-left h-screen grid grid-cols-8 gap-0">
                <div className="col-span-2 w-full h-full px-3 py-2">
                <UserInfoDisplay user={JSON.parse(localStorage.getItem('user'))} hover={true} />
                </div>
                <div className="bg-red-300 col-span-6 w-full h-full">
                    
                </div>
            </div>
        </div>
    )
}