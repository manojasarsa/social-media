import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUpHandler } from "../../features/auth/helpers";
import Loader from 'react-spinner-loader';
import { toast } from "react-toastify";

export const Signup = () => {

    const [showHideOne, setShowHideOne] = useState(false);
    const [showHideTwo, setShowHideTwo] = useState(false);

    const signUpInputs = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: ""
    }
    const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const {
        auth: { isLoading }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const [formInputs, setFormInputs] = useState(signUpInputs);

    const { firstName, lastName, username, password, confirmPassword } = formInputs;

    const formSignUpHandler = (e) => {
        e.preventDefault();

        if (firstName && lastName && password && confirmPassword) {

            if (password.length < 8) {
                toast.error("Password must be at least 8 characters", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
            } else if (!regex.test(password)) {         // test() search a match bw regex & pwd
                toast.error("Required 1 Uppercase, 1 Lowercase letter, 1 Special character, and 1 number", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
            } else {
                if (formInputs.password === formInputs.confirmPassword) {
                    dispatch(signUpHandler({ firstName, lastName, username, password }));
                } else {
                    toast.error("Password does not match!", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
                }
            }
        } else {
            toast.error("All fields are required!", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
        }
    }

    return (
        <div className="flex flex-col mt-4">
            <header className="place-self-center text-xl font-bold flex py-4 text-blue-600">
                ALCON
            </header>

            <div className="flex flex-col pb-1 shadow-none bg-slate-100 rounded-lg w-1/4 mx-auto min-w-max">

                <div className="z-20">
                    <Loader show={isLoading} type="body" />
                </div>

                <form className="mx-8 flex flex-col">

                    <h2 className="my-6 text-left text-slate-900 text-lg">Sign Up</h2>

                    <label className="text-sm py-1 text-slate-900">First Name<span className="form_label"></span>
                        <input
                            name="firstName"
                            value={firstName}
                            className="py-1 px-2 w-full mt-4 rounded-none border-2 focus:outline-blue-400"
                            type="text"
                            required={true}
                            onChange={(e) => setFormInputs({ ...formInputs, firstName: e.target.value })}
                        />
                    </label>

                    <label className="text-sm py-1 text-slate-900">Last Name<span className="form_label"></span>
                        <input
                            name="lastName"
                            value={lastName}
                            className="py-1 px-2 w-full mt-4 rounded-none border-2 focus:outline-blue-400"
                            type="text"
                            required={true}
                            onChange={(e) => setFormInputs({ ...formInputs, lastName: e.target.value })}
                        />

                    </label>

                    <label className="text-sm py-1 text-slate-900">User Name<span className="form_label"></span>
                        <input
                            name="username"
                            value={username}
                            className="py-1 px-2 w-full mt-4 rounded-none border-2 focus:outline-blue-400"
                            type="text"
                            required={true}
                            onChange={(e) => setFormInputs({ ...formInputs, username: e.target.value })}
                        />

                    </label>

                    <label className="relative text-sm py-1 text-slate-900">Password<span className="form_label"></span>
                        <input
                            name="password"
                            value={password}
                            className="py-1 px-2 w-full mt-4 rounded-none border-2 focus:outline-blue-400"
                            type={showHideOne ? "text" : "password"}
                            required={true}
                            onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                        />

                        {showHideOne ? <i className="absolute right-2 bottom-2.5 text-slate-500 fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHideOne((prev) => !prev)}>
                        </i> :
                            <i className="absolute right-2 bottom-2.5 text-slate-500 fa-solid fa-eye-slash show_hide_btn"
                                onClick={() => setShowHideOne((prev) => !prev)}>
                            </i>}

                    </label>

                    <label className="relative text-sm py-1 text-slate-900">Confirm Password<span className="form_label"></span>
                        <input
                            name="confirmPassword"
                            value={confirmPassword}
                            className="py-1 px-2 w-full mt-4 rounded-none border-2 focus:outline-blue-400"
                            type={showHideTwo ? "text" : "password"}
                            required={true}
                            onChange={(e) => setFormInputs({ ...formInputs, confirmPassword: e.target.value })}
                        />

                        {showHideTwo ? <i className="absolute right-2 bottom-2.5 text-slate-500 fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHideTwo((prev) => !prev)}>
                        </i> :
                            <i className="absolute right-2 bottom-2.5 text-slate-500 fa-solid fa-eye-slash show_hide_btn"
                                onClick={() => setShowHideTwo((prev) => !prev)}>
                            </i>}

                    </label>

                    <button className="my-3 text-x cursor-pointer text-center py-1 border2 bg-blue-600 hover:bg-blue-700 text-white font-semibold" onClick={(e) => formSignUpHandler(e)} >Sign Up</button>

                    <p className="my-2 text-center text-sm self-center text-blue-700 font-medium">
                        <Link to="/">Already have an account {">"} </Link>
                    </p>

                </form>
            </div>
        </div>
    )
};