import React, { useState } from "react";

export default function PointNotification(props) {

    const [points, setPoints] = useState(props.points)

    return (
        <div className="mx-0 rounded-xl text-lg inline-flex justify-between w-full bg-slate-600 px-3">
            <div className="text-left inline-flex">
                <h1 className="text-white">{points.name}</h1>
                <span className="w-4"></span>
                <h1 className="text-slate-300">{points.type}</h1>
            </div>
            <div className="text-right">
                {(points.points < 0 ? <h1 className="text-red-300">-{points.points}</h1> : <h1 className="text-green-300">+{points.points}</h1>)}
            </div>
        </div>
    )

}