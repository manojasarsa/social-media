import { useState } from "react";
import { AsideLeft, AsideRight, EditProfileModal, FollowInfoModal, MobileNavBar, Post } from "../../component";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutHandler } from "../../features/auth/authSlice";
import { FiLogOut } from "react-icons/fi";
import 'react-responsive-modal/styles.css';
import Loader from 'react-spinner-loader';
import { Link } from "react-router-dom";

export const Profile = () => {

    const [showUpdateProfile, setShowUpdateProfile] = useState(false);
    const [followersInfoModal, setFollowersInfoModal] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    const { username } = useParams();

    const {
        auth: { userData },
        user: { users, upLoadingPhoto, isLoading },
        posts: { posts }
    } = useSelector(state => state);

    const currentUser = users.find(user => user.username === username);

    const currentUserPosts = posts.filter(post => post.username === username);

    const dispatch = useDispatch();

    const authUser = users.find(user => user.username === userData?.username);

    return (
        <div>
            <MobileNavBar />

            <div className="flex justify-center px-5 sm:px-32">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="w-full sm:basis-2/3">

                        <header className="hidden sm:flex p-4 pt-6 w-full justify-between">
                            <h1 className="text-xl pl-8">Profile</h1>
                            <FiLogOut className="w-5 h-5 text-slate-700 cursor-pointer" onClick={() => dispatch(signOutHandler())} />
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden justify-between">
                            <Link to="/home"> ALCON </Link>
                            <FiLogOut className="w-5 h-5 text-slate-700 cursor-pointer" onClick={() => dispatch(signOutHandler())} />
                        </header>

                        {upLoadingPhoto ?  (
                            <div className="z-20">
                                <Loader show={upLoadingPhoto} />
                            </div>
                        ) : (

                            <div className="sm:ml-5 my-6 flex flex-col space-between">

                                <div className="flex mx-auto gap-8 ">

                                    <img src={currentUser?.profilePicture} className="w-32 h-32 rounded-full" alt="avatar" />

                                    <div className="flex flex-col mt-2">

                                        <h2 className="font-semibold">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>

                                        <h2> @{currentUser?.username} </h2>

                                        <button
                                            className="border my-3 p-1 rounded-lg text-x cursor-pointer text-center font-semibold text-slate-600 bg-slate-200 hover:bg-slate-100"
                                            onClick={() => setShowUpdateProfile(true)} >
                                            Edit Profile
                                        </button>

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

                                    <h3 className="text-base sm:text-xl cursor-pointer">0<span className="text-slate-600 text-base sm:text-xl"> posts</span></h3>

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

                                {currentUserPosts.map(post => <Post key={post._id} post={post} />)}

                            </div>
                        )}
                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
};