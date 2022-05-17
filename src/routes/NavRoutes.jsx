import { Routes, Route } from "react-router-dom";
import { Home, Signup } from "../pages";

export const NavRoutes = () => {

      return (
            <Routes>
                  <Route path="/" element = { <Home /> } ></Route>
                  <Route path="/signup" element = { <Signup /> }></Route>
                  <Route path="*" element = { <h2> OOPS! Page Not Found</h2>}></Route>
            </Routes>
      )
}