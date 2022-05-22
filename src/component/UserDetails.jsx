import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../features/user/helpers";

export const UserDetails = ({ currentUser, showFollowing }) => {

    const {
        user: { users, searchTerm },
        auth: { token, userData }
    } = useSelector(state => state);

    const dispatch = useDispatch();
    return (
        <div className="ml-5 mt-8 mb-4 flex ">

            <img 
                src={currentUser?.profilePicture} 
                className="w-12 h-12 rounded-full" 
                alt={`${currentUser?.username}`} />

            <div className="w-full flex flex-col pl-4 shrink">
                <h2 className="font-semibold flex-nowrap">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>
                <h2> @{currentUser?.username} </h2>
            </div>

            {showFollowing ? (
            <button 
                className="mr-8 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out" 
                onClick={() => dispatch(unFollowUser({ followUserId: currentUser._id, token }))} >
                Unfollow
            </button>
            ) : (
            <button 
                className="mr-8 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out" 
                onClick={() => dispatch(followUser({ followUserId: currentUser._id, token }))} >
                Follow
            </button>
            )}
        </div>
    )
}