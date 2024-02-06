import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
    const sidebar = useSelector((state) => state.layout.sidebar);
    return (
        <div className="h-screen">
            <div className="container h-full">
                <div className="flex items-start gap-4 h-full">
                    {/* Desktop Sidebar */}
                    <div className="h-full hidden md:block">
                        <Sidebar />
                    </div>
                    <div className="w-full flex-1 rounded-lg bg-white p-4 h-full relative">
                        {/* Mobile Sidebar */}
                        {sidebar && (
                            <div className="absolute top-0 left-0 w-full h-full block md:hidden">
                                <Sidebar mobile />
                            </div>
                        )}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
