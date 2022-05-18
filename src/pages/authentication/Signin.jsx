import { Link } from "react-router-dom";
import { useState } from "react";

export const Signin = () => {

    const loginInputs = {
        email: "",
        password: ""
    }

    const [ formInputs, setFormInputs ] = useState(loginInputs);

    // TODO --
    // const [error, setError] = useState("");
    // const [errorState, setErrorState] = useState(false);

    const [showHide, setShowHide] = useState(false);

    const { email, password } = formInputs;

    const formSignIn = (e) => {
        e.preventDefault();
    }
    
    const formGuestSignIn = (e) => {
        e.preventDefault();
        setFormInputs({ email: "testuser@gmail.com", password: "testuser@123" })
    }
    
    return (

        <div className="flex justify-items-center items-center">
            <div className="m-16 mx-auto w-full ">
                <div className="md:container md:mx-auto mx-auto flex">
                    <img src="assets/social1.svg" alt="social-img" className="w-1/2 hidden md:block "></img>
                    <div className="mx-auto sm:mx-28 mt-16">

                        <div className="flex flex-col mx-auto pb-8 shadow-none border-2 min-w-max ">

                            {/* <h1 className="mx-auto font-serif text-5xl p-2 ">Alcon</h1> */}

                            <form className="mx-8 flex flex-col">

                                <h2 className="my-6 text-left text-slate-900 text-lg">Sign In</h2>

                                <label className="text-sm py-1 text-slate-900">Email address<span className="form_label">*</span>
                                    <input
                                        name="email"
                                        value={email}
                                        className="py-1 w-full mt-4 rounded-none border-2"
                                        type="email"
                                        required={true}
                                        onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
                                    />
                                </label>

                                <label className="relative text-sm py-1 text-slate-900">Password<span className="form_label">*</span>
                                    <input
                                        name="password"
                                        value={password}
                                        className="py-1 w-full mt-4 rounded-none border-2"
                                        type={showHide ? "text" : "password"}
                                        required={true}
                                        onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                                    />

                                    <i className="absolute right-2 bottom-2.5 fa-solid fa-eye show_hide_btn"
                                        onClick={() => setShowHide((prev) => !prev)}>
                                    </i>

                                </label>

                                {/* TODO */}

                                {/* <button className="my-3 text-x cursor-pointer text-center py-1 border-2 font-semibold  text-slate-900 bg-sky-300" onClick={(e) => formSignIn(e)} >Login</button> */}

                                <Link to="/home" className="my-3 text-x cursor-pointer text-center py-1 border-2 font-semibold  text-slate-900 bg-sky-300">Login</Link>

                                {/* <button className="my-3 text-x cursor-pointer text-center py-1 border-2 font-semibold text-sky-500" onClick={(e) => formGuestSignIn(e)} >Guest Login</button> */}

                                <Link to="/home" className="my-3 text-x cursor-pointer text-center py-1 border-2 font-semibold  text-sky-500">Guest Login</Link>
                                
                                <p className="my-2 text-center text-sm self-center text-slate-900 font-medium">
                                    <Link to="/signup"> Sign Up Now</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}