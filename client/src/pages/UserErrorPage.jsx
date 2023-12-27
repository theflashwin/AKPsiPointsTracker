import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function UserErrorPage() {

    const [searchParams, setSearchParams] = useSearchParams()
    const error_msg = searchParams.get('error')

    return (
        <div>
            <h1 className="text-white">{error_msg}</h1>
        </div>
    )

}