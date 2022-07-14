import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInHandler } from "../../features/auth/helpers";
import { useState } from "react";
import Loader from 'react-spinner-loader';
import { toast } from "react-toastify";

export const Signin = () => {

    const loginInputs = {
        username: "",
        password: ""
    }

    const [formInputs, setFormInputs] = useState(loginInputs);

    const [showHide, setShowHide] = useState(false);

    const { username, password } = formInputs;

    const {
        auth: { isLoading },
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const formSignInHandler = (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error("All fields are required!", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
        } else {
            dispatch(signInHandler({ username, password }));
        }
    }

    const guestUser = { username: "chrislevin22", password: "chrislevin@123" };

    const formGuestSignInHandler = (e) => {
        e.preventDefault();
        setFormInputs(guestUser);
        dispatch(signInHandler(guestUser));
    }

    return (

        <div className="flex flex-col justify-items-center items-center">
            <div className="z-20">
                <Loader show={isLoading} type="body" />
            </div>

            <h1 className="mt-16 text-4xl font-bold text-blue-600 hidden lg:block tracking-wider">ALCON</h1>

            <div className="mx-auto w-full ">
                <div className="md:container md:mx-auto mx-auto flex">

                    <img src="assets/social1.svg" alt="social-img" className="w-1/2 hidden md:block ml-10"></img>

                    <div className="mx-auto mt-14 sm:mx-28 sm:mt-16">
                        <header className="text-2xl font-bold text-center py-2 mb-2 text-blue-600 sm:hidden">
                            <Link to="/home"> ALCON </Link>
                        </header>
                        <div className="flex flex-col mx-auto pb-8 shadow-none min-w-max bg-slate-100 rounded-lg">
                            <form className="mx-8 flex flex-col">

                                <h2 className="my-6 text-left text-slate-900 text-lg">Sign In</h2>

                                <label className="text-sm py-1 text-slate-900">Username<span className="form_label"></span>
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
                                        type={showHide ? "text" : "password"}
                                        required={true}
                                        onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                                    />

                                    {showHide ? <i className="absolute right-2 bottom-2.5 text-slate-500 fa-solid fa-eye show_hide_btn"
                                        onClick={() => setShowHide((prev) => !prev)}>
                                    </i> :
                                        <i className="absolute right-2 bottom-2.5 text-slate-500 fa-solid fa-eye-slash show_hide_btn"
                                            onClick={() => setShowHide((prev) => !prev)}>
                                        </i>}

                                </label>

                                <Link
                                    to="/home"
                                    className="my-3 text-x cursor-pointer text-center py-1 border-2 font-semibold  bg-blue-600 hover:bg-blue-700 text-white"
                                    onClick={(e) => formSignInHandler(e)} >
                                    Login
                                </Link>

                                <Link
                                    to="/home" className="my-3 text-x cursor-pointer text-center py-1 border-2 font-semibold  text-blue-700 hover:bg-slate-200"
                                    onClick={(e) => formGuestSignInHandler(e)} >
                                    Guest Login
                                </Link>

                                <p className="my-2 text-center text-sm text-slate-800 self-center font-medium"> New to Alcon?
                                    <Link className="text-blue-700" to="/signup"> Sign Up </Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};