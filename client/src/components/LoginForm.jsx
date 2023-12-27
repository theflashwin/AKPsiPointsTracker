import React, { useRef } from "react";
import { login } from "./helpers/admin";
import { ToastContainer, toast } from 'react-toastify';

export default function LoginForm(props) {

    const userInput = useRef()
    const passwordInput = useRef()

    return ( 
        <div>
            <form>
                <div className="backdrop-blur-sm">
                    <div className="bg-white/25 w-96 p-6 rounded-xl shadow-sm text-left">
                        <div className="flex items-center justify-center mb-4">
                            <img src="../akpsilogo.png" className="h-32" />
                        </div>
                        <label className="text-white">Username/Email</label>
                        <input ref={userInput} className="w-full py-2 rounded-lg bg-gray-50 text-gray-500 px-1 outline-none mb-4" />
                        <label className="text-white">Password</label>
                        <input ref={passwordInput} className="w-full py-2 rounded-lg bg-gray-50 text-gray-500 px-1 outline-none mb-4" />
                        <button type="button" className="bg-gradient-to-r from-lime-600 to-emerald-700
                        rounded-md hover:from-blue-600 hover:to-emerald-800 text-white text-xl p-2" onClick={() => {
                            login({
                                username: userInput.current?.value,
                                password: passwordInput.current?.value,
                            })
                        }}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )

}