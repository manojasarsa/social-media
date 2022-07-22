import { AiOutlineCamera } from "react-icons/ai";
import { Modal } from 'react-responsive-modal';
import { useDispatch, useSelector } from "react-redux";
import { startUpLoading } from "../features/user/userSlice";
import { updateUser } from "../features/user/helpers";
import { useState } from "react";

export const EditProfileModal = ({ currentUser, showUpdateProfile, setShowUpdateProfile  }) => {

    const [profile, setProfile] = useState(currentUser);
    const [fileUrl, setFileUrl] = useState("");

    const {
        auth: { token },
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dytvl1fnk/image/upload";

    const updateUserInfoHandler = async (e) => {
        e.preventDefault();
        setShowUpdateProfile(false);          // for closing modal 
        if(fileUrl) {
            dispatch(startUpLoading());
            const file = fileUrl;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "alcon-social");
            formData.append("folder", "alcon");

            try {
                const res = await fetch(cloudinaryUrl, {
                    method: "POST",
                    body: formData,
                });

                const { url } = await res.json();

                dispatch(updateUser({ token, userData: { ...profile, profilePicture: url } }));

            } catch (err) {
                console.error("error occured", err);
            }
        } else {
            dispatch(updateUser({ token, userData: profile }));
        }
    }   

    return (
        <Modal
            styles={{
                modal: { width: "20rem", borderRadius: "1rem", height: "fit-content" },
            }}
            open={showUpdateProfile}
            onClose={showUpdateProfile}
            showCloseIcon={false}
        >
            <div className="flex flex-col">
                <div className="flex flex-col mx-auto">

                    <h1 className="text-xl mb-4 mx-auto font-semibold">Edit Profile</h1>

                    <div className="relative">
                        <img 
                            src={fileUrl ? URL.createObjectURL(fileUrl) : currentUser?.profilePicture} 
                            className="mx-auto w-32 h-32 rounded-full" 
                            alt="avatar" 
                        />

                        <label className="w-8 h-8 absolute right-9 bottom-1 bg-slate-200 p-1 rounded-full border-2 cursor-pointer border-white fill-blue-600 stroke-0 hover:stroke-2 text-2xl">
                            <input
                                className="hidden"
                                type="file"
                                onChange={(e) => setFileUrl(e.target.files[0])}
                            />
                            <AiOutlineCamera />
                        </label>

                    </div>

                    <div className="mx-auto my-2 flex flex-col">
                        <h2 className="mx-auto font-semibold">Username</h2>
                        <h2 className="mx-auto text-slate-700">@{currentUser?.username}</h2>
                    </div>

                    <div className="mx-auto mb-2  flex flex-col">
                        <h2 className="mx-auto font-semibold">Name</h2>
                        <h2 className="text-slate-700">{`${currentUser?.firstName} ${currentUser?.lastName}`}</h2>
                    </div>

                    <div className="mx-auto mb-2 flex flex-col">
                        <h2 className="mx-auto font-semibold">Bio</h2>
                        <input
                            className="my-1.5 bg-transparent border px-1 border-slate-400"
                            type="text"
                            placeholder={profile?.bio}
                            value={profile?.bio}
                            onChange={(e) => setProfile((prev) => ({ ...prev, bio: e.target.value }))}
                        />
                    </div>
                    <div className="mx-auto mb-2 flex flex-col">
                        <h2 className="mx-auto font-semibold">Website</h2>
                        <input
                            className="my-1.5 bg-transparent border px-1 border-slate-400"
                            type="text"
                            placeholder={profile?.website}
                            value={profile?.website}
                            onChange={(e) => setProfile((prev) => ({ ...prev, website: e.target.value }))}
                        />
                    </div>
                </div>
                <div className="flex justify-between m-1">

                    <button 
                        className="px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out" 
                        onClick={() => setShowUpdateProfile(false)}>
                        Cancel
                    </button>

                    <button 
                        className="px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out" 
                        onClick={(e) => updateUserInfoHandler(e)}>
                        Update
                    </button>

                </div>
            </div>
        </Modal>
    )
};