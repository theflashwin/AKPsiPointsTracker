import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { verifyPasswords } from "../js/verifications";
import { pushPassword } from "./helpers/user";

export default function PasswordForm(props) {

    const pwd = useRef()
    const cpwd = useRef()

    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get('id')

    return (
        <div>
            <form >
                <div className="backdrop-blur-sm">
                    <div className="bg-white/25 w-96 p-6 rounded-xl shadow-sm text-left">
                        <div className="flex items-center justify-center mb-4">
                            <img src="../akpsilogo.png" className="h-32" />
                        </div>
                        <label className="text-white">Password</label>
                        <input ref={pwd} type="password" className="w-full py-2 rounded-lg bg-gray-50 text-gray-500 px-1 outline-none mb-4" />
                        <label className="text-white">Confirm Password</label>
                        <input ref={cpwd} type="password" className="w-full py-2 rounded-lg bg-gray-50 text-gray-500 px-1 outline-none mb-4" />
                        <button onClick={() => {
                            if (verifyPasswords(pwd.current?.value, cpwd.current?.value) === true) {
                                pushPassword(pwd.current?.value, id)
                            }
                        }} type="button" className="bg-gradient-to-r from-lime-600 to-emerald-700
                        rounded-md hover:from-blue-600 hover:to-emerald-800 text-white text-xl p-2" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}