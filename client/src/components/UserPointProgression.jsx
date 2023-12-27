import React, { useState } from "react";

export default function UserPointProgression(props) {

    const [user, setUser] = useState(props.user)

    return (
        <div>
            <div class="mx-auto mt-2 p-6 rounded-md border-4 border-slate-500 text-white flex max-w-screen-sm items-center justify-center">
                <div className="w-80">
                    <h1 className="text-2xl font-bold">Point Progression</h1>
                    <div className="grid grid-cols-6 gap-0">
                        <div className="col-span-5 mt-2.5">
                            <div className="w-full rounded-lg bg-slate-700 h-3"></div>
                            <div className="w-5/12 -translate-y-3 rounded-lg bg-gradient-to-r from-sky-900 to-yellow-700 h-3"></div>
                        </div>
                        <div className="text-center px-2">
                            <h1 className="text-xl">4200</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}