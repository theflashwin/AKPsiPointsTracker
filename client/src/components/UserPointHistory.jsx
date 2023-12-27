import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import PointNotification from "./PointNotification";

export default function UserPointHistory(props) {

    const [user, setUser] = useState(props.user)

    return (

        <div>
            <div class="mx-auto mt-2 p-6 rounded-md border-4 border-slate-500 text-white flex max-w-screen-sm items-center justify-center">
                <div className="w-80">
                    <h1 className="text-2xl mb-2 font-bold">Point History</h1>
                    <PointNotification points={user.pointHistory[0]} />
                </div>
            </div>
        </div>

    )

}