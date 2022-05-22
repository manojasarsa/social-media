import { AsideLeft, AsideRight, EditProfileModal, Post } from "../../component";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutHandler } from "../../features/auth/authSlice";
import { FiLogOut } from "react-icons/fi";
import 'react-responsive-modal/styles.css';
import { useState } from "react";

export const Profile = () => {

    const [open, setOpen] = useState(false);

    const { username } = useParams();

    const {
        auth: { token, userInfo },
        user: { users, upLoadingPhoto }
    } = useSelector(state => state);

    const currentUser = users.find(user => user.username === username);

    const dispatch = useDispatch();

    // const authUser = users.find(user => user.username === userInfo?.username); 
    
    // console.log("checkCurrent", currentUser, "checkauth", authUser, "checkBoth:", currentUser === authUser);

    return (
        <div>
            <div className="flex mx-12 my-4">
                <div className="mx-auto flex px-32 h-screen w-screen">

                    <AsideLeft />

                    <main className="w-full basis-2/3">

                        <header className="flex p-4 w-full justify-between">
                            <h1 className="text-xl">Profile</h1>
                            <FiLogOut className="w-5 h-5 text-slate-700 cursor-pointer" onClick={() => dispatch(signOutHandler())} />
                        </header>

                        <div className="ml-5 my-6 flex flex-col space-between">

                            <div className="flex mx-auto gap-8 ">

                                <img src={currentUser?.profilePicture} className="w-32 h-32 rounded-full" alt="avatar" />

                                <div className="flex flex-col mt-2">

                                    <h2 className="font-semibold">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>

                                    <h2> @{currentUser?.username} </h2>

                                    <button className="border my-3 p-1 rounded-lg text-x cursor-pointer text-center font-semibold text-slate-600 hover:bg-slate-200" onClick={() => setOpen(true)} >Edit Profile</button>

                                    {/* Modal for Edit Profile */}

                                    <EditProfileModal currentUser={currentUser} open={open} setOpen={setOpen} />

                                </div>
                            </div>

                            <div className="mt-4 flex flex-col items-center">
                                <h2 className="font-semibold">{currentUser?.bio}</h2>
                                <h2 className="font-semibold text-blue-600">{currentUser?.website}</h2>
                            </div>

                            <div className="flex gap-6 pl-4 mt-4 mb-16 justify-items-center mx-auto">

                                <h3 className="text-xl">0<span className="text-slate-600"> posts</span></h3>

                                <h3 className="text-xl">3<span className="text-slate-600"> followers</span></h3>

                                <h3 className="text-xl">2<span className="text-slate-600"> following</span></h3>

                            </div>

                            <h1 className="text-2xl text-center mb-6">Your Posts</h1>

                            <Post />

                        </div>

                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
};