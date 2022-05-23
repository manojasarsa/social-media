import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getUsers } from "./features/user/helpers";
import { NavRoutes } from "./routes/NavRoutes";
export default function App() {

    const {
        auth: { token },
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [token, dispatch]);

    return (
        <div className="App scroll-smooth">
            <NavRoutes />
        </div>
    )
}