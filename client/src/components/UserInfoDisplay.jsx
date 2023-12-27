import React, {useState} from "react";
import CountUp from 'react-countup'
import Badges from "./Badges";

export default function UserInfoDisplay(props) {

    const [user, setUser] = useState(props.user)
    const [hover, setHover] = useState((props.hover ? props.hover : false))

    const statusMappings = new Map([
        ["Gold", "yellow"],
        ["Blue", "default"],
        ["Active", "green"],
        ["Experienced", "pink"],
        ["TI", "indigo"],
        ["GSP", "purple"],
        ["LOA", "dark"],
        ["BR", "red"],
    ])

    const pledgeSemesterMappings = new Map([
        ["Fall 2023", "gradient_peachy"],
        ["Spring 2023", "gradient_lavender"],
        ["Fall 2022", "gradient_bombpop"],
        ["Spring 2022", "gradient_strawberry"],
        ["Fall 2021", "gradient_flamingo"],
        ["Spring 2021", "gradient_orange"],
    ])

    return (
        
            <div class="w-full rounded-md bg-gradient-to-r from-sky-900 to-yellow-700 p-1">
                <div class={hover ? "rounded-md w-full bg-gray-800 hover:bg-gray-600" : "rounded-md w-full bg-gray-800"}>
                    <div className="p-6">
                        <div className="mb-2 inline-flex">
                            <Badges color={statusMappings.get(user.standing)} text={user.standing} />
                            <Badges color="gradient_peachy" text={user.pledgeSemester} />
                        </div>
                        <a href="#">
                            <h5 class="mb-1 text-3xl font-semibold tracking-tight">{user.firstname} {user.lastname}</h5>
                        </a>
                        <span className="text-xl">Points: <span className="font-bold"><CountUp end={user.points} /></span></span>
                        <div className="w-80"></div>
                        {(user.deiRequirement ? <h1 className="text-green-400">Fulfilled DEI Requirement</h1> : <h1 className="text-red-400">Not Completed DEI Requirement</h1>)}
                    </div>
                </div>
            </div>



    )

}