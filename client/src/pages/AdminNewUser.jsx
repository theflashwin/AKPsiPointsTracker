import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { newUser } from "../components/helpers/admin";
import { verifyIsAdmin } from "../js/verifications";

export default function AdminNewUser() {

    const navigate = useNavigate()

    useEffect(() => {
        if (verifyIsAdmin() !== true) {
            navigate('/admin/login')
        } else {

        }
    })

    const firstname = useRef()
    const lastname = useRef()
    const email = useRef()
    const points = useRef()
    const status = useRef()
    const standing = useRef()
    const pledgeSemester = useRef()

    return (
        <div>
            <h1 className=" mb-4 font-bold bg-gradient-to-r from-sky-700 to-amber-600 bg-clip-text text-transparent text-white text-4xl">Add a New User</h1>
            <form class="text-left w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input ref={firstname} class="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="George" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input ref={lastname} class="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500" id="grid-last-name" type="text" placeholder="Burdell" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input ref={email} class="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="grid-password" placeholder="gburdell3@gatech.edu" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-city">
                            Points
                        </label>
                        <input ref={points} class="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight " id="grid-city" type="text" placeholder="420" />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-state">
                            Status
                        </label>
                        <div class="relative">
                            <select ref={status} class="block appearance-none w-full bg-gray-700 text-gray-200 py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                                <option>N/A</option>
                                <option>Blue</option>
                                <option>Gold</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-state">
                            Standing
                        </label>
                        <div class="relative">
                            <select ref={standing} class="block appearance-none w-full bg-gray-700 text-gray-200 py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                                <option>Active</option>
                                <option>LOA</option>
                                <option>TI</option>
                                <option>GSP</option>
                                <option>BIP</option>
                                <option>BR</option>
                                <option>Experienced</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-state">
                            Pledge Semester
                        </label>
                        <div class="relative">
                            <select ref={pledgeSemester} class="block appearance-none w-full bg-gray-700 text-gray-200 py-3 px-4 pr-8 rounded leading-tight " id="grid-state">
                                <option>Fall 2023</option>
                                <option>Spring 2023</option>
                                <option>Fall 2022</option>
                                <option>Spring 2022</option>
                                <option>Fall 2021</option>
                                <option>Spring 2021</option>
                                <option>Fall 2020</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        newUser({
                            firstname: firstname.current?.value,
                            lastname: lastname.current?.value,
                            email: email.current?.value,
                            points: points.current?.value,
                            status: status.current?.value,
                            standing: standing.current?.value,
                            pledgeSemester: pledgeSemester.current?.value,
                        })
                    }}
                    class="bg-gradient-to-r mt-3 from-sky-700 to-amber-600 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="button"
                >Submit</button>
            </form>
        </div>
    )
}