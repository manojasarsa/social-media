import { useState } from "react";
import { AsideLeft, AsideRight, EditProfileModal, FollowInfoModal, MobileNavBar, Post } from "../../component";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutHandler } from "../../features/auth/authSlice";
import { followUser, unFollowUser } from "../../features/user/helpers";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";
import 'react-responsive-modal/styles.css';
import Loader from 'react-spinner-loader';
import { Link } from "react-router-dom";

export const Profile = () => {

    const [showUpdateProfile, setShowUpdateProfile] = useState(false);
    const [followersInfoModal, setFollowersInfoModal] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    const { username } = useParams();

    const {
        auth: { userData, token },
        user: { users, upLoadingPhoto },
        posts: { posts }
    } = useSelector(state => state);

    const currentUser = users.find(user => user.username === username);

    const currentUserPosts = posts.filter(post => post.username === username);

    const sortedPosts = currentUserPosts.slice();     // for creating new pure array

    sortedPosts.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));  // to get latest posts first

    const dispatch = useDispatch();

    const authUser = users.find(user => user.username === userData?.username);

    return (
        <div>
            <MobileNavBar />

            <div className="flex justify-center px-5 sm:px-32 md:mt-4">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="md:mx-4 w-full sm:basis-2/3">

                        <header className="hidden sm:flex m-4 w-full justify-between">
                            <h1 className="text-xl">Profile</h1>
                            <FiLogOut className="mr-2 w-5 h-5 text-blue-700 cursor-pointer" onClick={() => dispatch(signOutHandler())} />
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden justify-between">
                            <Link to="/home" id="hero-logo"> ALCON </Link>
                            <FiLogOut className="w-5 h-5 text-blue-700 cursor-pointer" onClick={() => dispatch(signOutHandler())} />
                        </header>

                        {upLoadingPhoto ? (
                            <div className="z-20">
                                <Loader show={upLoadingPhoto} />
                            </div>
                        ) : (

                            <div className="sm:ml-5 my-6 flex flex-col space-between">

                                <div className="flex mx-auto gap-8">

                                    <img src={currentUser?.profilePicture} className="w-32 h-32 rounded-full" alt="avatar" />

                                    <div className="flex flex-col mt-2">

                                        <h2 className="font-semibold">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>

                                        <h2> @{currentUser?.username} </h2>

                                        {authUser.username === currentUser.username ? 
                                        (<button
                                            className="border my-3 p-1 rounded-lg text-x cursor-pointer text-center font-semibold text-slate-600 bg-slate-200 hover:bg-slate-100"
                                            onClick={() => setShowUpdateProfile(true)} >
                                            Edit Profile
                                        </button> 
                                        ) : ( authUser?.following.find(eachUser => eachUser?.username === currentUser?.username) ? (
                                        <button
                                            className="mr-8 mt-4 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                                            onClick={() => dispatch(unFollowUser({ followUserId: currentUser._id, token }))} >
                                            Unfollow
                                        </button> 
                                        ) : (
                                        <button
                                            className="mr-8 mt-4 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                                            onClick={() => dispatch(followUser({ followUserId: currentUser._id, token }))} >
                                            Follow
                                        </button>
                                        ))}

                                        {/* Modal for Edit Profile */}

                                        <EditProfileModal currentUser={authUser} showUpdateProfile={showUpdateProfile} setShowUpdateProfile={setShowUpdateProfile} />

                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col items-center">
                                    <h2 className="font-semibold">{currentUser?.bio}</h2>
                                    <h2 className="font-semibold text-blue-600">{currentUser?.website}</h2>
                                </div>

                                <div className="flex gap-6 pl-4 mt-4 mb-16 justify-items-center mx-auto">

                                    <FollowInfoModal
                                        currentUser={currentUser}
                                        followersInfoModal={followersInfoModal}
                                        showFollowing={showFollowing}
                                        setFollowersInfoModal={setFollowersInfoModal}
                                    />

                                    <h3 className="text-base sm:text-xl cursor-pointer">
                                        {currentUserPosts.length}
                                        <span className="text-slate-600 text-base sm:text-xl"> posts
                                        </span>
                                    </h3>

                                    <h3
                                        className="text-base sm:text-xl cursor-pointer"
                                        onClick={() => {
                                            setFollowersInfoModal(true);
                                            setShowFollowing(true)
                                        }
                                        }>
                                        {currentUser?.following.length}
                                        <span className="text-slate-600 pl-1">
                                            following
                                        </span>
                                    </h3>

                                    <h3
                                        className="text-base sm:text-xl cursor-pointer"
                                        onClick={() => {
                                            setFollowersInfoModal(true);
                                            setShowFollowing(false)
                                        }
                                        }>
                                        {currentUser?.followers.length}
                                        <span className="text-slate-600 pl-1">
                                            followers
                                        </span>
                                    </h3>

                                </div>

                                <h1 className="text-2xl text-center mb-6">Your Posts</h1>

                                {sortedPosts.map(post => <Post key={post._id} post={post} />)}

                            </div>
                        )}
                    </main>

                    <AsideRight />
                    <a href="#">
                        <AiOutlineArrowUp className="hidden sm:block fixed bottom-0 right-20 bg-blue-300 text-slate-50 text-5xl p-3 rounded-full mb-2 mr-20 hover:bg-blue-500" />
                    </a>
                </div>
            </div>
        </div>
    )
};