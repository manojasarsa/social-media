import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { openPostModal } from "../features/post/postSlice";

export const MobileNavBar = () => {

    const { userData } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    return (
        <nav className="block sm:hidden">

            <div className="fixed bottom-20 right-5 w-100 h-100 p-3 text-2xl rounded-full block xl:hidden cursor-pointer
                bg-blue-600 hover:bg-blue-800 z-10">
                <GrEdit
                    onClick={() => dispatch(openPostModal()) }>
                </GrEdit>
            </div>

            <ul className="fixed bottom-0 w-full sm:pl-2 flex justify-around bg-slate-300 z-10">
                <li >
                    <Link to="/home" className="flex py-4 gap-3 px-3 cursor-pointer">
                        <i className="text-xl fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/explore" className="flex py-4 gap-3 px-3 cursor-pointer">
                        <i className="text-xl fa-solid fa-hashtag"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/notifications" className="flex py-4 gap-3 px-3 cursor-pointer">
                        <i className="text-xl fa-solid fa-bell"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/bookmarks" className="flex py-4 gap-3 px-3 cursor-pointer">
                        <i className="text-xl fa-solid fa-bookmark"></i>
                    </Link>
                </li>
                <li>
                    <Link to={`/profile/${userData?.username}`} className="flex py-4 gap-3 px-3 cursor-pointer">
                        <i className="text-xl fa-solid fa-user"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};