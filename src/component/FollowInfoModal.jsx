import { AiOutlineCamera } from "react-icons/ai";
import { Modal } from 'react-responsive-modal';
import { useDispatch, useSelector } from "react-redux";
import { startUpLoading } from "../features/user/userSlice";
import { updateUser } from "../features/user/helpers";
import { useState } from "react";
import { UserDetails } from "./UserDetails";

export const FollowInfoModal = ({ currentUser, followersInfoModal, showFollowing, setFollowersInfoModal  }) => {

    const {
        auth: { token, userData },
    } = useSelector(state => state);

    const dispatch = useDispatch();  

    return (
        <Modal
            styles={{
                modal: { width: "20rem", height: "fit-content", paddingTop: "0.2rem" },
            }}
            open={followersInfoModal}
            onClose={followersInfoModal}
            showCloseIcon={false}
            center={true}
        >
            <div className="flex justify-end">
                <button
                    className=""
                    onClick={() => setFollowersInfoModal(false)}>
                    x
                </button>
            </div>

            {showFollowing ? (
                <div className="flex flex-col">
                    <h1 className="text-xl  mx-auto font-semibold">Following</h1>
                    {currentUser?.following.map(user => <UserDetails key={user._id} currentUser={user} showFollowing={showFollowing} />)}
                </div>
            ) : (
                <div className="flex flex-col">
                    <h1 className="text-xl mx-auto font-semibold">Followers</h1>
                    {currentUser?.followers.map(user => <UserDetails key={user._id} currentUser={user} showFollowing={showFollowing} />)}     
                </div>
            )}

        </Modal>
    )
};