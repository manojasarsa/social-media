// import { Header } from "../../components";
import { Link } from "react-router-dom";
// import "./auth.css";
import { useState } from "react";
// import { useAuth } from "../../utils/authMethods";
// import { locationType } from "../../types/common.types";

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

    // const location = useLocation();

    // const { from } = (location.state as locationType) || {
    //     from :  { pathname: "/" }
    // }

    // const { signInHandler } = useAuth();

    const formSignIn = (e) => {
        e.preventDefault();
        // signInHandler({ email, password }, from);
    }
    
    const formGuestSignIn = (e) => {
        e.preventDefault();
        setFormInputs({ email: "testuser@gmail.com", password: "testuser@123" })
        // signInHandler({ email, password } , from);
    }
    
    return (
        <div className="body">

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
                            onChange={(e) => setFormInputs({...formInputs, email: e.target.value})}
                        />
                    </label>

                    <label className="text-sm py-1 text-slate-900">Password<span className="form_label">*</span>
                        <input 
                            name="password"
                            value={password}
                            className="py-1 w-full mt-4 rounded-none border-2" 
                            type= {showHide ? "text" : "password" }
                            required= {true} 
                            onChange={(e) => setFormInputs({...formInputs, password: e.target.value})}
                        />

                        <i className="fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHide((prev) => !prev)}>
                        </i>

                    </label>

                    <button className="my-3 text-x cursor-pointer text-center py-1 border-2 text-sky-500 font-semibold" onClick={(e) => formSignIn(e)} >Login</button>

                    <button className="my-3 text-x cursor-pointer text-center py-1 text-slate-900 border bg-sky-300" onClick={(e) => formGuestSignIn(e)} >Guest Login</button>

                    <p className="my-2 text-center text-sm self-center text-slate-900 font-medium">
                        <Link to="/signup"> Sign Up Now</Link> 
                    </p>

                </form>
            </div>

        </div>
    )
}

