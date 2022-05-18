import { Routes, Route } from "react-router-dom";
import { Home, Signup, Signin } from "../pages";

export const NavRoutes = () => {

      return (
            <Routes>
                  <Route path="/home" element = { <Home /> } ></Route>
                  <Route path="/signup" element = { <Signup /> }></Route>
                  <Route path="/" element = { <Signin /> }></Route>
                  
                  <Route path="*" element = { <h2> OOPS! Page Not Found</h2>}></Route>
            </Routes>
      )
}