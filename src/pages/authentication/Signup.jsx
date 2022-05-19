import { Link } from "react-router-dom";
import { useState } from "react";

export const Signup = () => {

    const [showHideOne, setShowHideOne] = useState(false);
    const [showHideTwo, setShowHideTwo] = useState(false);

    const signUpInputs = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formInputs, setFormInputs] = useState(signUpInputs);

    const { firstName, lastName, userName, email, password, confirmPassword } = formInputs;

    const formHandler = (e) => {

        // TODO 
        
        e.preventDefault();
        if (firstName && lastName && email && password && confirmPassword) {
                if (formInputs.password === formInputs.confirmPassword) {
                    // signUpHandler({ email, password, firstName, lastName });
                }
                else {
                    console.error("password doesn't match");
                }
        } else {
                console.log("error");
        }
    }
    
    return (
            <div className="flex flex-col pb-1 shadow-none border-2 w-1/4 mx-auto mt-12 min-w-max">

                {/* <h1 className="mx-auto font-serif text-5xl p-2 ">Alcon</h1> */}
                
                <form className="mx-8 flex flex-col">

                    <h2 className="my-6 text-left text-slate-900 text-lg">Sign Up</h2>

                    <label className="text-sm py-1 text-slate-900">First Name<span className="form_label">*</span>
                        <input 
                            name="firstName"
                            value={firstName}
                            className="py-1 w-full mt-4 rounded-none border-2" 
                            type="text" 
                            required={true} 
                            onChange={(e) => setFormInputs({...formInputs, firstName: e.target.value})}
                        />
                    </label>

                    <label className="text-sm py-1 text-slate-900">Last Name<span className="form_label">*</span>
                        <input 
                            name="lastName"
                            value={lastName}
                            className="py-1 w-full mt-4 rounded-none border-2" 
                            type= "text"
                            required= {true} 
                            onChange={(e) => setFormInputs({...formInputs, lastName: e.target.value})}
                        />

                    </label>

                    <label className="text-sm py-1 text-slate-900">User Name<span className="form_label">*</span>
                        <input 
                            name="userName"
                            value={userName}
                            className="py-1 w-full mt-4 rounded-none border-2" 
                            type= "text"
                            required= {true} 
                            onChange={(e) => setFormInputs({...formInputs, userName: e.target.value})}
                        />

                    </label>

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

                    <label className="relative text-sm py-1 text-slate-900">Password<span className="form_label">*</span>
                        <input 
                            name="password"
                            value={password}
                            className="py-1 w-full mt-4 rounded-none border-2" 
                            type= {showHideOne ? "text" : "password" }
                            required= {true} 
                            onChange={(e) => setFormInputs({...formInputs, password: e.target.value})}
                        />

                        <i className="absolute right-2 bottom-2.5 fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHideOne((prev) => !prev)}>
                        </i>

                    </label>

                    <label className="relative text-sm py-1 text-slate-900">Confirm Password<span className="form_label">*</span>
                        <input 
                            name="confirmPassword"
                            value={confirmPassword}
                            className="py-1 w-full mt-4 rounded-none border-2" 
                            type= {showHideTwo ? "text" : "password" }
                            required= {true} 
                            onChange={(e) => setFormInputs({...formInputs, confirmPassword: e.target.value})}
                        />

                        <i className="absolute right-2 bottom-2.5 fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHideTwo((prev) => !prev)}>
                        </i>

                    </label>

                    <button className="my-3 text-x cursor-pointer text-center py-1 border2 bg-blue-600 hover:bg-blue-700 text-white font-semibold" onClick={(e) => formHandler(e)} >Sign Up</button>

                    <p className="my-2 text-center text-sm self-center text-slate-900 font-medium">
                        <Link to="/">Already have an account {">"} </Link>
                    </p>

                </form>
            </div>
    )
}