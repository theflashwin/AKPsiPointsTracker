import React, { useState } from "react";

export default function Badges(props) {

    let css = "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
    const [text, setText] = useState((props.text ? props.text : "Default"))

    if (props.color === 'dark') css = "bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
    if (props.color === 'red') css = "bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
    if (props.color === 'green') css = "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
    if (props.color === 'yellow') css = "g-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
    if (props.color === 'indigo') css = "bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
    if (props.color === 'purple') css = "bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
    if (props.color === 'pink') css = "bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"
    if (props.color === 'gradient_peachy') css = "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded"
    if (props.color === 'gradient_lavender') css = "bg-gradient-to-r from-indigo-300 to-purple-400 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded"
    if (props.color === 'gradient_bombpop') css = "bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded"
    if (props.color === 'gradient_strawberry') css = "bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded"
    if (props.color === 'gradient_flamingo') css = "bg-gradient-to-r from-pink-400 to-pink-600 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"
    if (props.color === 'gradient_orange') css = "bg-gradient-to-r from-yellow-600 to-red-600 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"
   

    return (
        <span class={css}>{text}</span>
    )

}
