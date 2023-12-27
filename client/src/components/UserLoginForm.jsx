import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { login } from "./helpers/user";

export default function UserLoginForm() {

    const emailInput = useRef()
    const passwordInput = useRef()

    const navigate = useNavigate()

    const [reload, setRelod] = useState(false)

    return (
        <div>
             <form>
                <div className="backdrop-blur-sm">
                    <div className="bg-white/25 w-96 p-6 rounded-xl shadow-sm text-left">
                        <div className="flex items-center justify-center mb-4">
                            <img src="../akpsilogo.png" className="h-32" />
                        </div>
                        <label className="text-white">Email</label>
                        <input ref={emailInput} className="w-full py-2 rounded-lg bg-gray-50 text-gray-500 px-1 outline-none mb-4" />
                        <label className="text-white">Password</label>
                        <input ref={passwordInput} type="password" className="w-full py-2 rounded-lg bg-gray-50 text-gray-500 px-1 outline-none mb-4" />
                        <button type="button" className="bg-gradient-to-r from-lime-600 to-emerald-700
                        rounded-md hover:from-blue-600 hover:to-emerald-800 text-white text-xl p-2" onClick={async () => {
                            const x = await login({
                                email: emailInput.current?.value,
                                pwd: passwordInput.current?.value,
                            })
                            .then((response) => {
                                if (response == true) {
                                    navigate('/user/dashboard')
                                }
                            })
                        }}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )

}