import React from "react";

export default function Input(props) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="flex items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">{props.label}</p>
                {props.error && (
                    <p className="text-[10px] text-red-500">{props.error}</p>
                )}
            </label>
            <input
                {...props}
                className={`p-2 border rounded-lg outline-none focus:border-teal-500 ${
                    props.error ? "border-red-500" : ""
                } ${props.className ? props.className : ""}`}
            />
        </div>
    );
}
