import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { validateEmail } from "../utils/helper";
import API, { get, post, responseValidator } from "../utils/api";
import authToken from "../utils/storage";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";

export default function Login() {
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleValidateForm = (data) => {
        let validate = true;

        if (!data.email) {
            validate = false;
            setErrors((prev) => ({ ...prev, email: "Email is required!" }));
        } else {
            if (!validateEmail(data.email)) {
                validate = false;
                setErrors((prev) => ({ ...prev, email: "Format is invalid!" }));
            }
        }

        if (!data.password) {
            validate = false;
            setErrors((prev) => ({
                ...prev,
                password: "Password is required!",
            }));
        }

        return validate;
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        if (handleValidateForm({ email, password })) {
            post(
                API.auth.login,
                { email: email, password: password },
                (data, status) => {
                    authToken.set(data.token);
                    if (responseValidator(status)) {
                        get(API.auth.me, (data, status) => {
                            if (responseValidator(status)) {
                                dispatch(setUser(data));
                                navigate("/");
                            } else {
                                console.log("error");
                            }
                        });
                    }
                }
            );
        }
    };

    return (
        <div className="min-h-screen p-4 flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl max-w-[400px] flex-1">
                <form
                    className="flex items-center flex-col justify-center gap-4"
                    onSubmit={handleSubmitForm}
                >
                    <div className="flex items-center justify-between gap-4 w-full">
                        <p className="text-lg">Login</p>
                        <Logo />
                    </div>
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="text"
                        name="email"
                        error={errors.email}
                        onChange={() => setErrors({ ...errors, email: "" })}
                    />
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        name="password"
                        error={errors.password}
                        onChange={() => setErrors({ ...errors, password: "" })}
                    />
                    <Button type="submit">Login</Button>
                    <Link
                        to="/register"
                        className="text-teal-500 hover:text-teal-600 transition-colors"
                    >
                        You dont have an account ?
                    </Link>
                </form>
            </div>
        </div>
    );
}
