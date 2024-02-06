import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarMenuItem(props) {
    return (
        <NavLink
            to={props.path}
            className={({ isActive }) =>
                `text-lg py-2 px-4 rounded-lg flex items-center gap-2 ${
                    isActive
                        ? "bg-teal-50 text-teal-500"
                        : "text-gray-800 hover:bg-gray-100"
                }`
            }
        >
            {props.icon}
            <p>{props.name}</p>
        </NavLink>
    );
}
