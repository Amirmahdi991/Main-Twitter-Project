import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

export default function Router() {
    const user = useSelector((state) => state.auth.user);

    return (
        <>
            {user !== undefined ? (
                <Routes>
                    {user === null ? (
                        <>
                            <Route
                                path="*"
                                element={<Navigate to="/login" />}
                            />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    ) : (
                        <>
                            <Route element={<Layout />}>
                                <Route path="*" element={<Navigate to="/" />} />
                                <Route path="/" element={<Home />} />
                                <Route path="/profile" element={<Profile />} />
                            </Route>
                        </>
                    )}
                </Routes>
            ) : (
                <p>loading ...</p>
            )}
        </>
    );
}
