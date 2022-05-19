import { Routes, Route } from "react-router-dom";
import { Home, Signup, Signin, Explore, Bookmarks, Notifications, Profile } from "../pages";

export const NavRoutes = () => {

      return (
            <Routes>
                  <Route path="/home" element = { <Home /> } ></Route>
                  <Route path="/signup" element = { <Signup /> }></Route>
                  <Route path="/" element = { <Signin /> }></Route>
                  <Route path="/explore" element = { <Explore /> }></Route>
                  <Route path="/bookmarks" element = { <Bookmarks /> }></Route>
                  <Route path="/notifications" element = { <Notifications /> }></Route>
                  <Route path="/profile" element = { <Profile /> }></Route>
                  
                  <Route path="*" element = { <h2> OOPS! Page Not Found</h2>}></Route>
            </Routes>
      )
}