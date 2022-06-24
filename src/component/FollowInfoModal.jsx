import { Modal } from 'react-responsive-modal';
import { UserDetails } from "./UserDetails";

export const FollowInfoModal = ({ currentUser, followersInfoModal, showFollowing, setFollowersInfoModal  }) => {

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
                    className="font-bold text-md"
                    onClick={() => setFollowersInfoModal(false)}>
                    x
                </button>
            </div>

            {showFollowing ? (
                <div className="flex flex-col">
                    <h1 className="text-xl  mx-auto font-semibold">Following</h1>
                    {!currentUser?.following.length ? <h3 className='text-center text-slate-800 mt-2'>Not following anyone</h3>  :
                    currentUser?.following.map(user => <UserDetails key={user._id} currentUser={user} showFollowing={showFollowing} />)}
                </div>
            ) : (
                <div className="flex flex-col">
                    <h1 className="text-xl mx-auto font-semibold">Followers</h1>
                    {!currentUser?.followers.length ? <h3 className='text-center text-slate-800 mt-2'>No followers</h3>  :
                    currentUser?.followers.map(user => <UserDetails key={user._id} currentUser={user} showFollowing={showFollowing} />)}     
                </div>
            )}

        </Modal>
    )
};