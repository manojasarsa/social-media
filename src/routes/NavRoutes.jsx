import { Routes, Route } from "react-router-dom";
import { Home, Signup, Signin, Explore, Bookmarks, Notifications, Profile } from "../pages";

export const NavRoutes = () => {

      const {
            auth: { token }
        } = useSelector( state => state.auth );

      return (
            <Routes>

                  <Route path={"/mock"} element={ <Mockman /> } />
                  
                  {token ? (
                        <>
                              <Route path="/" element = { <Navigate to="/home" replace /> } />

                              <Route path="/signup" element = { <Navigate to="/home" replace  /> } />
                        </>
                  ):(
                        <>
                              <Route path="/" element = { <Signin /> } />
                              <Route path="/signup" element = { <Signup /> } />
                        </>
                  )}         

                  <Route element = { <PrivateRoutes /> }>
                        <Route path="/home" element = { <Home /> }  />
                        <Route path="/explore" element = { <Explore /> } />
                        <Route path="/bookmarks" element = { <Bookmarks /> } />
                        <Route path="/notifications" element = { <Notifications /> } />
                        <Route path="/profile" element = { <Profile /> } />
                  </Route>                  
                  <Route path="*" element = { <h2> OOPS! Page Not Found</h2>} />
            </Routes>
      )
}