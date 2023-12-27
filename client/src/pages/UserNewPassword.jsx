import React, { useEffect, useState } from "react";

import { useSearchParams, useNavigate } from "react-router-dom";
import { verifySecurityCode } from "../js/verifications";

import PasswordForm from "../components/PasswordForm";
import Loader from "../components/Loader";

import axios from "axios";

export default function UserNewPassword() {

    const [searchParams, setSearchParams] = useSearchParams()
    const code = searchParams.get('code')
    const id = searchParams.get('id')

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [valid, setValid] = useState(false)

    useEffect(() => {

        async function fetch() {
            setLoading(true)
            await axios.get(`http://localhost:8080/users/verifycode?code=${code}&id=${id}`)
                .then((response) => {

                    if (response.data == "found") {
                        setValid(true)
                    } else {
                        setValid(false)
                    }

                    setLoading(false)

                })
                .catch((error) => {

                    setValid(false)

                })
        }

        if (loading == true) {
            fetch()
        }


    }, [])

    return (
        <div>
            {(loading ? <Loader /> : (!valid ? <h1 className="text-white text-2xl">Your code is not valid</h1> : <div>
                <h1 className="text-white text-2xl mb-4">Set up your new password</h1>
                <PasswordForm id={id} />
                </div>))}
        </div>
    )
}