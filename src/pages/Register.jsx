import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { validateEmail } from "../utils/helper";
import API, { post, responseValidator } from "../utils/api";

export default function Register() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleValidateForm = (data) => {
        let validate = true;

        if (!data.name) {
            validate === false;
            setErrors((prev) => ({ ...prev, name: "Name is required!" }));
        }

        if (!data.email) {
            validate = false;
            setErrors((prev) => ({ ...prev, email: "Email is required!" }));
        } else {
            if (!validateEmail(data.email)) {
                validate = false;
                setErrors((prev) => ({
                    ...prev,
                    email: "Format is invalid!",
                }));
            }
        }

        if (!data.password) {
            validate = false;
            setErrors((prev) => ({
                ...prev,
                password: "Password is required!",
            }));
        } else {
            if (data.password !== data.confirmation_password) {
                validate = false;
                setErrors((prev) => ({
                    ...prev,
                    password: "Password confirmation is no correct!",
                }));
            }
        }

        return validate;
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const confirmation_password =
            e.target.elements.confirmation_password.value;
        if (
            handleValidateForm({ name, email, password, confirmation_password })
        ) {
            post(
                API.auth.register,
                {
                    name,
                    email,
                    password,
                    password_confirmation: confirmation_password,
                },
                (data, status) => {
                    if (responseValidator(status)) {
                        navigate("/login");
                    } else {
                        console.log("Error");
                    }
                }
            );
        }
    };

    return (
        <div className="min-h-screen p-4 flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl max-w-[400px] flex-1">
                <form
                    onSubmit={handleSubmitForm}
                    className="flex items-center flex-col justify-center gap-4"
                >
                    <div className="flex items-center justify-between gap-4 w-full">
                        <p className="text-lg">Register</p>
                        <Logo />
                    </div>
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        type="text"
                        name="name"
                        error={errors.name}
                        onChange={() => setErrors({ ...errors, name: "" })}
                    />
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
                    <Input
                        label="Password Confirmation"
                        placeholder="Enter your password confirmation"
                        type="password"
                        name="confirmation_password"
                        error={errors.password}
                        onChange={() => setErrors({ ...errors, password: "" })}
                    />
                    <Button type="submit">Register</Button>
                    <Link
                        to="/login"
                        className="text-teal-500 hover:text-teal-600 transition-colors"
                    >
                        You already have an account ?
                    </Link>
                </form>
            </div>
        </div>
    );
}
