import React from "react";

export default function Button(props) {
    return (
        <button
            {...props}
            className={`h-[42px] bg-teal-500 text-white w-full rounded-lg transition-colors hover:bg-teal-600 disabled:animate-bounce disabled:bg-gray-300 ${
                props.className ? props.className : ""
            }`}
        >
            {props.children}
        </button>
    );
}
